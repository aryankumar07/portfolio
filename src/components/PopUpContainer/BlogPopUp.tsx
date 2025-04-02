import { useBlogModel } from "../../store/useBlogModel";
import Popup from "./Popup";
import { useMaximumStore } from "../../store/useMaximumStore";
import { cn } from '../../libs/utils';
import { useEffect, useState } from "react";
import supabase from "../../libs/supabase";
import { HeartIcon } from "lucide-react";
import { useLocalStorage } from "../../hooks/useLocalStorage";




const BlogPopUp = () => {
  const maximum = useMaximumStore((state) => state.maximum);
  const isOpen = useBlogModel((state) => state.isOPen);
  const setClose = useBlogModel((state) => state.setClose);
  const blog = useBlogModel((state) => state.blog);
  const [blogHeadings, setBlogHeadings] = useState<string[]>([]);
  const [isParsing, setIsParsing] = useState(true);
  const [Likes, setLikes] = useState(0)
  const [liked, setLiked] = useLocalStorage('liked', false)



  const handleLike = async () => {
    try {
      const newLikeCount = liked ? Likes - 1 : Likes + 1;

      setLikes(newLikeCount);
      setLiked(!liked);

      const { error } = await supabase
        .from('Blog_info')
        .update({ likes: newLikeCount })
        .eq('id', blog!.id);

      if (error) {
        throw error;
      }

    } catch (error) {
      setLikes(Likes);
      setLiked(!liked);
      console.error('Error updating likes:', error);
      alert('Failed to update likes. Please try again.');
    }
  };


  useEffect(() => {
    async function getLikes() {
      if (blog) {
        const { data: likes } = await supabase.from('Blog_info').select('likes').eq('id', blog?.id)
        if (likes) {
          setLikes(likes[0].likes)
        }
      }
    }
    getLikes()
  }, [blog])

  useEffect(() => {
    setIsParsing(true);
    const headings = Array.from(document.querySelectorAll('[id*="blogHeads"]'));

    // Extract heading text safely
    const extractedHeadings = headings.map((heading) => {
      try {
        // More robust parsing that handles different HTML structures
        const content = heading.innerHTML;
        const text = new DOMParser()
          .parseFromString(content, 'text/html')
          .body.textContent || '';
        return text.trim();
      } catch (error) {
        console.error('Error parsing heading:', error);
        return 'Untitled section';
      }
    });

    setBlogHeadings(extractedHeadings);
    setIsParsing(false);

    // Set up IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = entry.target.id.split('').pop()
        const element = document.querySelector(`#content${index}`)
        element?.classList.toggle('show', entry.isIntersecting)
      });
    }, { threshold: 1 });

    headings.forEach((heading) => observer.observe(heading));

    return () => {
      observer.disconnect();
    };
  }, [blog, isOpen]);

  const Body = (
    <div className="relative">
      <div>
        <img
          className={`w-full transition-all duration-300 ease-in-out rounded-t-md ${maximum ? 'h-auto' : 'h-64 object-cover'}`}
          src={blog?.image || "regex.png"}
          alt={blog?.title || "Blog Image"}
        />
      </div>

      {/* Main content grid */}
      <div className={cn(`grid ${maximum ? 'grid-cols-6' : 'grid-cols-1'} gap-4`)}>

        {/* Left sidebar (only visible when maximized) */}
        {maximum && (
          <div className="hidden md:block">
            <div className="col-span-1 p-4 sticky top-4 h-fit">
              <div className="flex justify-center items-center gap-3">
                <HeartIcon
                  fill={liked ? 'red' : 'white'}
                  onClick={handleLike}
                  className="cursor-pointer"
                  size={40} />
                <div className="text-lg font-semibold text-foreground">{Likes}</div>
              </div>
            </div>
          </div>
        )}


        {/* Blog content */}
        <div className={cn("col-span-4", !maximum && "col-span-full")}>
          <div className="markdown-body p-4">
            {blog?.body ? <blog.body /> : (
              <div className="text-center py-8 text-gray-500">
                Loading content...
              </div>
            )}
          </div>
        </div>


        {/* Right sidebar (only visible when maximized) */}
        {maximum && (
          <div className="col-span-1 p-4 sticky top-4 h-fit">
            <div className="">
              <h1 className="font-semibold text-lg mb-3 text-foreground">In This Article</h1>
              {isParsing ? (
                <div className="text-gray-500 italic">Parsing headings...</div>
              ) : blogHeadings.length > 0 ? (
                <div className="flex justify-start items-start gap-3">
                  {/* Vertical Line - Fixed Version */}
                  <ul className="space-y-2 border border-l-2 border-t-0 border-r-0 border-b-0 px-6 ">
                    {blogHeadings.map((heading, index) => (
                      <div id={`content${index}`} key={index} >
                        <li className="">
                          <a
                            href={`#blogHeads${index}`}
                            className="text-sm line-clamp-1 mb-5 text-foreground"
                            title={heading}
                          >
                            {heading || `Section ${index + 1}`}
                          </a>
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="text-gray-500 italic">No headings found</div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );

  return (
    <Popup isOpen={isOpen} setClose={setClose} data={Body} window />
  );
};


export default BlogPopUp;
