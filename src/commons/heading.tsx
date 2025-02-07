import { cn } from "../libs/utils"
interface HeadingProps {
  value: string,
  color?: string,
  size?: string,
  font?: string,
  customClass?: string,
}

const Heading: React.FC<HeadingProps> = ({
  value,
  color = 'text-foreground',
  size = "text-lg md:text-xl",
  font = 'font-semibold font-outfit',
  customClass = "",
}) => {
  return (
    <span className={cn(`${color} ${size} ${font}`, customClass, "inline-flex items-center")}>
      {value}
    </span>
  )
}

export default Heading;
