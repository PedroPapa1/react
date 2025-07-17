import { PropsWithChildren } from "react";
import { AccordionItemContextProvider } from "./AccordionContext";

type AccordionItemProps = PropsWithChildren<{
  className: string;
  id: string;
}>;

export function AccordionItem({ id, className, children }: AccordionItemProps) {
  return (
    <AccordionItemContextProvider id={id}>
      <li className={className}>{children}</li>
    </AccordionItemContextProvider>
  );
}
