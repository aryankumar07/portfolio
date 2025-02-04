import Card from "../../commons/Card";
import Heading from "../../commons/heading";
import ImageContainer from "../../commons/ImageContainer";
import { CardsDetail, CardDetail, Facts } from "../../constants";
import { useGameModel } from "../../store/useGameModal";
import { motion } from "motion/react";

const AboutMeBody = () => {
  const setOpen = useGameModel((state) => state.setOpen)
  const setIndex = useGameModel((state) => state.setIndex)

  const handelClick = (index: number) => {
    setIndex(index)
    setOpen()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <div id="about" className="font-outfit text-lightForeground font-light text-[15px] leading-7">
          <p className="pb-3"> Greetings! 🤠 I am Aryan, a developer from India, currently navigating my career path. I have a passion for building
            innovative solutions and possess a natural curiosity that drives me to explore new technologies.
          </p>
          <p className="pb-3">
            My daily work revolves around developing dynamic websites using React.js, along with hands-on experience in Next.js. Additionally, I actively
            participate in competitive programming on platforms such as LeetCode and Codeforces.
          </p>
          <p>
            My coding journey began with native iOS
            development using Swift—because, why not! Over time, I explored Flutter for mobile app development and even experimented with
            game development using Unreal Engine, though the timing was not quite right. Eventually, I transitioned into web development,
            and I am thoroughly enjoying the journey—because, once again, why not!
          </p>
        </div>

        <div className="my-9">
          <Heading value="What I Bring" size="text-2xl" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center items-center pt-6">
            {
              CardsDetail.map((card: CardDetail) => {
                return <Card key={card.id} info={card} />
              })
            }
          </div>
        </div>

        <div className="mt-9 mb-0">
          <Heading value="HOG" size="text-3xl" />
          <h6 className="text-foreground text-xs">High On Games</h6>

          <ul className="flex flex-nowrap justify-start items-start -mx-9 gap-6 h-[250px] min-[550px]:h-[230px] overflow-x-scroll pt-20 pb-7 px-9 scrollbar scroll-smooth overscroll-contain snap-x snap-mandatory scrollbar-thumb-highlight scrollbar-thumb-rounded-full">
            {
              Facts.map((fact, index) => (
                <div
                  onClick={() => handelClick(index)}
                  key={fact.quote}
                  className="relative min-w-[100%] lg:min-w-[calc(50%-12px)] h-full snap-center border border-[#383838] bg-greyish rounded-xl cursor-pointer"
                >
                  <span className="absolute top-0 left-0 translate-x-8 -translate-y-14 shadow-2xl rounded-xl">
                    <ImageContainer src={fact.image} width="w-28" height="h-24" />
                  </span>

                  <Heading value={fact.name} customClass="mb-3 mt-4 pl-8 max-[500px]:pt-8 min-[500px]:pl-36" />

                  <div className="text-foreground text-sm px-8 mb-4 font-outfit line-clamp-2">
                    {fact.quote}
                  </div>
                </div>
              ))
            }
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default AboutMeBody;
