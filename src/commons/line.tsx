
interface LineProps {
    color?: string;
    width?: string;
    height?: string;
}

const Line = ({ color = "#ccc", width = "100%", height = "3px" }: LineProps) => {
    return (
        <div
            style={{
                backgroundColor: color,
                height,
                width,
            }}
            className="rounded-md"
        />
    );
};

export default Line;
