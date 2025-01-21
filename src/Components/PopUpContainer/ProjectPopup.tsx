import { useState } from "react"
import Button from "../../commons/button"
import Heading from "../../commons/heading"
import Line from "../../commons/line"
import { Projects } from "../../constants"
import { useProjectModel } from "../../store/useProjectModel"
import Popup from "./Popup"
import { ChevronLeft } from 'lucide-react'

const ProjectPopup = () => {

    const isOpen = useProjectModel((state) => state.isOpen)
    const setClose = useProjectModel((state) => state.setClose)
    const index = useProjectModel((state) => state.index)
    const [pos, setPos] = useState(0)

    const data = Projects[index]
    const NumberOfImage: number = data.images.length;

    const nextPicture = () => {
        setPos((prev) => {
            if (prev === NumberOfImage - 1) return 0;
            return prev + 1;
        })
    }


    const prevPicture = () => {
        setPos((prev) => {
            if (prev === 0) return NumberOfImage - 1
            return prev - 1;
        })
    }


    const body = (
        <div className="h-[550px] relative overflow-y-scroll">
            <ChevronLeft onClick={prevPicture} size={30} className="absolute left-0 top-32 cursor-pointer hover:text-highlight " />
            <ChevronLeft onClick={nextPicture} size={30} className="absolute rotate-180 right-0 top-32 cursor-pointer hover:text-highlight " />
            {
                data.images.map((image, index) => {
                    return <img key={image} src={image} alt="Image" className={`object-cover rounded-t-xl w-full h-64 ${index == pos ? "block" : "hidden"}`} />
                })
            }
            <Line height="1px" />
            <div className="flex flex-row flex-wrap">
                <div className="flex flex-col justify-start items-center gap-4 p-4 basis-1/4">
                    <Button onClick={() => window.open(data.github, "_blank")} value="Github" className="w-full rounded-3xl hover:text-highlight " />
                    <Button onClick={() => window.open(data.live, "_blank")} value="Live" className="w-full rounded-3xl hover:text-highlight " />
                </div>
                <div className="basis-3/4 flex flex-col justify-start p-4">
                    <Heading value={data.title} size="text-3xl" />
                    <Heading value={data.date} size="text-sm" font="font-thin font-outfit" />
                    <p className="text-justify">
                        {data.description}
                    </p>
                </div>
            </div>
        </div>
    )


    return (
        <Popup isOpen={isOpen} setClose={setClose} data={body} big />
    )
}

export default ProjectPopup
