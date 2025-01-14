import { Profiletags } from "../../constants";

const LeftMain = () => {
  console.log(Profiletags)
  return (
    <div>
      {
        Profiletags.map((tag) => {
          return (
            <div>
              {tag.title}
            </div>
          )
        })
      }
    </div>
  )
}


export default LeftMain;
