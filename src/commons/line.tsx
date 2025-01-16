import { cn } from "../libs/utils";

interface LineProps {
  color?: string;
  width?: string;
  height?: string;
  className?: string,
}

const Line = ({ color = "#ccc", width = "100%", height = "3px", className = "" }: LineProps) => {
  return (
    <div
      style={{
        backgroundColor: color,
        height,
        width,
      }}
      className={cn("rounded-md", className)}
    />
  );
};

export default Line;
