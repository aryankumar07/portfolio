import { useBlogModel } from "../../store/useBlogModel"
import Popup from "./Popup"
import Example from '../../../blog/example.mdx'
import { useMaximumStore } from "../../store/useMaximumStore"
import { cn } from '../../libs/utils'
import { useEffect } from "react"




const BlogPopUp = () => {
  const maximum = useMaximumStore((state) => state.maximum)
  const isOPen = useBlogModel((state) => state.isOPen)
  const setClose = useBlogModel((state) => state.setClose)
  // const blog = useBlogModel((state)=>state.blog)


  useEffect(() => {
    const headings = document.querySelectorAll('#blogHeads')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry.target.textContent)
        entry.target.classList.toggle('show', entry.isIntersecting)
      })
    }, {
      threshold: 1
    }
    )
    headings.forEach((heading) => {
      observer.observe(heading)
    })
  })

  const Body = (
    <div className="">
      <div>
        <img
          className={`w-full transition-all duration-300 ease-in-out rounded-t-md ${maximum ? 'h-auto' : 'h-64'}`} // Dynamic height
          src="regex.png"
          alt="Blog Image"
        />
      </div>
      <div className={cn(
        `grid ${maximum ? 'grid-cols-6' : 'grid-cols-1'}`
      )}>
        {maximum &&
          <div className="col-span-1">
            Liked
          </div>
        }
        <div className="col-span-4">
          <div className="markdown-body">
            <Example />
          </div>
        </div>
        {maximum &&
          <div className="col-span-1">

          </div>
        }
      </div>
    </div>
  )

  return (
    <Popup isOpen={isOPen} setClose={setClose} data={Body} window />
  )
}


export default BlogPopUp
