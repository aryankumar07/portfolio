import { LucideIcon } from "lucide-react";
import React from "react";

interface IconsTagProp {
  icontag: LucideIcon;
}

const IconsTag: React.FC<IconsTagProp> = ({ icontag: Icon }) => {
  return (
    <div className="p-3 bg-primary rounded-lg border border-neutral-600">
      <Icon className="text-highlight" size={18} />
    </div>
  );
};

export default IconsTag;
