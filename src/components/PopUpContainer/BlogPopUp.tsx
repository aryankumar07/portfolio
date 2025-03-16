import { useBlogModel } from "../../store/useBlogModel"
import Popup from "./Popup"
import Example from '../../../blog/example.mdx'
import { useMaximumStore } from "../../store/useMaximumStore"
import { cn } from '../../libs/utils'




const BlogPopUp = () => {
  const maximum = useMaximumStore((state) => state.maximum)
  const isOPen = useBlogModel((state) => state.isOPen)
  const setClose = useBlogModel((state) => state.setClose)
  // const blog = useBlogModel((state)=>state.blog)


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
          <div className="bg-yellow-500 col-span-1">
            likeed
          </div>
        }
        <div className="col-span-4 text-foreground">
          <Example
            components={{
              a(props) {
                return <a {...props} style={{ borderTop: '1px dotted', color: 'violet' }} />
              },
              span(props) {
                return <span style={{ color: 'orange' }} >{props.children}</span>
              }
            }}
          />
        </div>
        {maximum &&
          <div className="bg-green-500 col-span-1">
            Slider
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
