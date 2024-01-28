import React from "react";
import { SelectedPage } from "@/shared/types";

type Props = {
  page: string;
  selectedPage: string;
  setSelectedPage: (page: SelectedPage) => void;
};

const Link = ({ page, setSelectedPage, selectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  const handleClick = () => {
    setSelectedPage(lowerCasePage);
  };
  return (
    <a
      className={` ${
        selectedPage === lowerCasePage ? "text-primary-500" : ""
      } hover:text-primary-500`}
      href={`#${lowerCasePage}`}
      onClick={handleClick}
    >
      {page}
    </a>
  );
};

export default Link;
