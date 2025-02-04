import React from "react";
import { headers } from "../../constants";
import Line from "../../commons/line";

interface RightHeaderProps {
  isActive: number;
}

const RightHeader: React.FC<RightHeaderProps> = ({ isActive }) => {
  return (
    <div className="flex flex-col gap-3 justify-start items-start text-foreground text-3xl font-semibold font-outfit">
      {headers[isActive]}
      <Line color="#ffdb70" height="5px" width="50px" />
    </div>
  );
};

export default RightHeader;
