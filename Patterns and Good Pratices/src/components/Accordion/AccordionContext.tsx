import { createContext, PropsWithChildren, useContext, useState } from "react";

type AccordionContextType = {
  openItemId: string | null;
  toggleItem: (id: string) => void;
};

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

export function AccordionContextProvider({ children }) {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  function toggleItem(id: string) {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  }

  return <AccordionContext.Provider value={{ openItemId, toggleItem }}>{children}</AccordionContext.Provider>;
}

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw new Error("Accordion-related components must be used within an <Accordion> component.");
  }

  return ctx;
}

type AccordionItemContextType = PropsWithChildren<{
  id: string;
}>;

const AccordionItemContext = createContext<AccordionItemContextType | undefined>(undefined);

export function AccordionItemContextProvider({ id, children }: AccordionItemContextType) {
  return <AccordionItemContext.Provider value={{ id }}>{children}</AccordionItemContext.Provider>;
}

export function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContext);

  if (!ctx) {
    throw new Error("Accordion-related components must be used within an <Accordion> component.");
  }

  return ctx;
}
