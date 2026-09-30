"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type BookingTab = "direct" | "online";

interface BookingModalContextType {
  isOpen: boolean;
  activeTab: BookingTab;
  openModal: (tab?: BookingTab | React.MouseEvent | unknown) => void;
  closeModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextType>({
  isOpen: false,
  activeTab: "direct",
  openModal: () => {},
  closeModal: () => {},
});

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<BookingTab>("direct");

  const openModal = useCallback((tab?: BookingTab | React.MouseEvent | unknown) => {
    if (tab === "online" || tab === "direct") {
      setActiveTab(tab);
    } else {
      setActiveTab("direct");
    }
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <BookingModalContext.Provider value={{ isOpen, activeTab, openModal, closeModal }}>
      {children}
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  return useContext(BookingModalContext);
}
