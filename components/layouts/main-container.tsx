import { clazz } from "@ce1pers/use-class";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function MainContainer({ children, className }: Props) {
  return (
    <article className={clazz("p-5", className ?? "")}>{children}</article>
  );
}
