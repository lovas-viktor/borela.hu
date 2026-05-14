import { ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "aside" | "main";
}

export default function Container({ children, className, as: Tag = "div" }: ContainerProps) {
  return (
    <Tag
      className={clsx(
        "mx-auto w-full px-7",
        "max-w-[1180px]",
        className
      )}
    >
      {children}
    </Tag>
  );
}
