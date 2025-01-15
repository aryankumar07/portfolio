import { SocialHandles } from "../../constants";

const LeftFooter = () => {
    return (
        <div className="flex flex-row gap-3 mt-3">
            {
                SocialHandles.map((handle) => {
                    return (
                        <a
                            key={handle.url}
                            href={handle.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-blue-500 transition-colors duration-200"
                        >
                            <handle.icon />
                        </a>
                    )
                })
            }
        </div>
    );
}

export default LeftFooter;
