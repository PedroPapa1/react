import { PropsWithChildren } from "react";
import { useAccordionContext, useAccordionItemContext } from "./AccordionContext";

type AccordionTitleProps = PropsWithChildren<{
  className: string;
}>;

export function AccordionTitle({ className, children }: AccordionTitleProps) {
  const { toggleItem } = useAccordionContext();
  const { id } = useAccordionItemContext();

  return (
    <h3 className={className} onClick={() => toggleItem(id)}>
      {children}
    </h3>
  );
}
