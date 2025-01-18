import { LucideIcon } from "lucide-react";
import React from "react";

interface IconsTagProp {
  icontag: LucideIcon;
}

const IconsTag: React.FC<IconsTagProp> = ({ icontag: Icon }) => {
  return (
    <div className="p-3 bg-primary rounded-xl shadow-1xl">
      <Icon className="text-highlight" size={16} />
    </div>
  );
};

export default IconsTag;
