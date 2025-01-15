import { useState } from "react";
import { headers } from "../../constants";

const RightContainer = () => {

    const [page, setPage] = useState(0);

    let body: JSX.Element = <h1>about body element</h1>;

    if (page == 1) {
        body = <h1>Resume</h1>
    } else if (page == 2) {
        body = <h1>Projects</h1>
    } else if (page === 3) {
        body = <h1>Blogs</h1>
    } else if (page === 4) {
        body = <h1>Contact</h1>
    }

    return (
        <div className="m-3  bg-primary rounded-3xl h-[150vh]">
            {
                headers.map((head, index) => {
                    return (
                        <div key={index} className={`'cursor-pointer' ${page === index ? 'text-yellow-400' : 'text-foreground'}`} onClick={() => setPage(index)}>
                            {head}
                        </div>
                    )
                })
            }
            <div>
                {body}
            </div>
        </div>
    )
}

export default RightContainer;
