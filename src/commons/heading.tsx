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
  size = "text-xl",
  font = 'font-bold font-outfit',
  customClass = "",
}) => {
  return <div className={cn(`${color} ${size} ${font}`, customClass)}>
    {
      value
    }
  </div>
}

export default Heading;
