import { motion } from "motion/react";
import { Eye } from "lucide-react"
import { Blogs } from "../../constants";
import { useBlogModel } from "../../store/useBlogModel";


const BlogBody = () => {

  const setOpen = useBlogModel((state) => state.setOPen)
  const setBlog = useBlogModel((state) => state.setBlog)


  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="columns-1 md:columns-2 md:gap-3 lg:columns-3">
        {
          Blogs.map((blog) => {
            return (
              <div
                key={blog.id}
                className="relative mb-1 group cursor-pointer font-outfit text-foreground bg-primary break-inside-avoid hover:bg-neutral-700 transition-colors duration-150 rounded-lg p-3"
                onClick={() => {
                  setBlog(blog)
                  setOpen()
                }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-neutral-800 rounded-lg bg-opacity-30 opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-150 ease-linear flex justify-center items-center z-50">
                    <Eye
                      size={30}
                      className="text-highlight z-50 rounded-lg border-neutral-400 border p-1 bg-background"
                    />
                  </div>
                  <img src={blog.image} className="rounded-lg border-neutral-600 border" />
                </div>
                <p className="mt-2 text-lg">{blog.title}</p>
              </div>
            )
          })
        }
      </div>
    </motion.div>
  )
}

export default BlogBody;
