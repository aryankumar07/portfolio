import AnimatedName from "../commons/animatedName"

const BattleField = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="min-w-[500px] h-56 flex items-center justify-center">
        <AnimatedName title="Urvashi" width={500} height={500} fontSize="100px" radius={25} />
      </div>
    </div>
  )
}



export default BattleField


