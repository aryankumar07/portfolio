import { useEffect, useState } from "react";

export function UseScreenSize() {
    const [screenSize, setScreenSize] = useState<"large" | "medium" | "small">("large");

    useEffect(() => {
        const handleSize = () => {
            if (window.matchMedia("(min-width: 1024px)").matches) {
                setScreenSize("large");
            } else if (window.matchMedia("(min-width: 813px)").matches) {
                setScreenSize("medium");
            } else {
                setScreenSize("small");
            }
        };

        handleSize();

        window.addEventListener("resize", handleSize);

        return () => {
            window.removeEventListener("resize", handleSize);
        };
    }, []);

    return screenSize;
}
