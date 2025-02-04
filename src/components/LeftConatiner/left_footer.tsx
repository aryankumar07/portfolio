import { SocialHandles } from "../../constants";

const LeftFooter = () => {
  return (
    <div className="flex flex-row gap-3 ">
      {
        SocialHandles.map((handle) => {
          return (
            <a
              key={handle.url}
              href={handle.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-200 transition-all ease-linear duration-300"
            >
              <handle.icon size={18} />
            </a>
          )
        })
      }
    </div>
  );
}

export default LeftFooter;
