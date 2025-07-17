import { PropsWithChildren } from "react";
import { AccordionContextProvider } from "./AccordionContext";
import { AccordionItem } from "./AccordionItem";
import { AccordionTitle } from "./AccordionTitle";
import { AccordionContent } from "./AccordionContent";

type AccordionProps = PropsWithChildren<{
  className: string;
}>;

export function Accordion({ className, children }: AccordionProps) {
  return (
    <AccordionContextProvider>
      <ul className={className}>{children}</ul>
    </AccordionContextProvider>
  );
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;
