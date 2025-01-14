
interface LineProps {
  color?: string;
  width?: string;
}

const Line = ({ color = "#ccc", width = "100%" }: LineProps) => {
  return (
    <div
      style={{
        backgroundColor: color,
        height: "3px",
        width,
      }}
    />
  );
};

export default Line;
