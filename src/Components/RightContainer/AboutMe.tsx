import Card from "../../commons/Card";
import Heading from "../../commons/heading";
import ImageContainer from "../../commons/ImageContainer";
import { CardsDetail, CardDetail, Facts } from "../../constants";
import { useGameModel } from "../../store/useGameModal";

const AboutMeBody = () => {


  const setOpen = useGameModel((state) => state.setOpen)
  const setIndex = useGameModel((state) => state.setIndex)

  const handelClick = (index: number) => {
    setIndex(index)
    setOpen()
  }


  return (
    <div className="h-auto m-5 overflow-x-hidden">
      <div id="about" className="font-extralight font-outfit text-foreground text-[1.1rem] leading-6 p-1 text-justify">
        Howdy! 🤠 Folks, I'm Aryan, a fellow developer from India, trying to figure out my path. I enjoy building new things and am a naturally curious person.
        <br /> <br />
        My day-to-day tasks involve building dynamic websites using React.js, with some hands-on experience in Next.js. I also spend time grinding on platforms like LeetCode and Codeforces.
        I began my coding journey building apps on native iOS using Swift—because, why not! I've built a few apps using Flutter and even dabbled in game development with Unreal Engine. It wasn't the right time for that, though.
        Eventually, I found my way to web development, and I’m loving the journey so far—because, again, why not!
      </div>

      <Heading value="What I Bring" size="text-3xl" customClass="mt-4 mb-5" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 justify-center items-center p-4">
        {
          CardsDetail.map((card: CardDetail) => {
            return <Card key={card.id} info={card} />
          })
        }
      </div>

      <Heading value="HOG" size="text-3xl" customClass="mt-5" />
      <h6 className="text-foreground text-[6px]">HIGH ON GAMES</h6>

      <div className="flex flex-row gap-2 w-full overflow-x-auto h-60 mt-7 scrollbar  scrollbar-thumb-highlight scrollbar-thumb-rounded-full">
        {
          Facts.map((fact, index) => {
            return (
              <div
                onClick={() => handelClick(index)}
                key={fact.quote}
                className="min-w-[100%] relative xl:min-w-[48%] h-36 border border-[#383838] bg-greyish rounded-2xl mt-16 cursor-pointer ">
                <div className="absolute border border-[#383838] rounded-3xl top-[-48px] left-12 shadow-inner bg-white">
                  <ImageContainer src={fact.image} width="w-28" height="h-24" />
                </div>
                <Heading value={fact.name} customClass="ml-44 mt-4" />
                <div className="text-foreground font-light font-outfit mt-8 ml-6 line-clamp-2">
                  {
                    fact.quote
                  }
                </div>
              </div>
            )
          })
        }

      </div>


    </div>
  )
}

export default AboutMeBody;
