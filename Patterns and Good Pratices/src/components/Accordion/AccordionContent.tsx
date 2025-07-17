import { PropsWithChildren } from "react";
import { useAccordionContext, useAccordionItemContext } from "./AccordionContext";

type AccordionContentProps = PropsWithChildren<{
  className: string;
}>;

export function AccordionContent({ className, children }: AccordionContentProps) {
  const { openItemId } = useAccordionContext();
  const { id } = useAccordionItemContext();

  return <div className={openItemId === id ? `${className ?? ""} open` : `${className ?? ""} close`}>{children}</div>;
}
