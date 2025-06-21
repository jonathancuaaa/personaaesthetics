// components/ui/button.tsx
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <button
      className={cn(
        "px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition",
        className
      )}
      {...props}
    />
  );
};
