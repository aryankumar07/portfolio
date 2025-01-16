import { useEffect, useState } from "react"


export function UseScreenSize() {

    const [screenSize, setSreenSize] = useState<"large" | "medium" | "small">("large")

    useEffect(() => {
        const handleSize = () => {
            if (window.matchMedia("(min-width : 1024px)").matches) {
                setSreenSize("large")
            } else if (window.matchMedia("(min-width : 813px)").matches) {
                setSreenSize("medium")
            } else if (window.matchMedia("(min-width : 620px)").matches) {
                setSreenSize("small")
            }
        }

        window.addEventListener("resize", handleSize)

        handleSize()


        return () => {
            window.removeEventListener("resize", handleSize);
        }
    }, [])

    return screenSize;
}
