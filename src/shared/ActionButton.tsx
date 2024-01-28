import React from "react";
import { SelectedPage } from "@/shared/types";

type Props = {
  children: string;
  setSelectedPage: (page: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  const handleClick = () => {
    setSelectedPage(SelectedPage.ContactUs);
  };

  return (
    <button
      className="bg-secondary-500 py-1 px-5 rounded-lg text-gray-500 hover:bg-primary-500 transition hover:text-white"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default ActionButton;
