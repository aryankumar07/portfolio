import React from "react";
import { cn } from "../libs/utils";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    value: string;
    size?: string;
}


const Button: React.FC<ButtonProps> = ({
    value,
    onClick,
    className,
    size = "w-[60px]",
    ...rest
}) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                `flex justify-center items-center p-1 bg-greyish text-foreground rounded-lg cursor-pointer ${size} hover:text-highlight`,
                className
            )}
            {...rest}
        >
            {value}
        </button>)
}

export default Button;
