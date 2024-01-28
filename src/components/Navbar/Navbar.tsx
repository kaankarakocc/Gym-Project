import React, { useEffect, useState } from "react";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import ActionButton from "@/shared/ActionButton";

type Props = {
  selectedPage: string;
  setSelectedPage: (page: SelectedPage) => void;
  isMediaLarge: boolean;
  isPositionTop: boolean;
};

const Navbar = ({
  setSelectedPage,
  selectedPage,
  isMediaLarge,
  isPositionTop,
}: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!isMediaLarge) {
      setIsMenuOpen(false);
    }
  }, [isMediaLarge]);

  const flexBetween = "flex justify-between items-center";

  const menu = () => {
    return (
      <div className=" w-[300px] h-full bg-primary-100 z-40 right-0 bottom-0 top-0 fixed shadow-2xl">
        <div className="flex items-end justify-end w-11/12 my-10">
          <XMarkIcon
            className="w-6 h-6 text-white drop-shadow-md cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
        <div className={`${flexBetween} `}>
          <div className={`flex flex-col items-center w-full gap-16`}>
            <Link
              page="Home"
              setSelectedPage={setSelectedPage}
              selectedPage={selectedPage}
            />
            <Link
              page="Benefits"
              setSelectedPage={setSelectedPage}
              selectedPage={selectedPage}
            />
            <Link
              page="Our Classes"
              setSelectedPage={setSelectedPage}
              selectedPage={selectedPage}
            />
            <Link
              page="Contact Us"
              setSelectedPage={setSelectedPage}
              selectedPage={selectedPage}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <nav
      className={`${flexBetween} ${
        !isPositionTop ? "bg-primary-100" : "bg-gray-20"
      } py-5 w-full fixed z-40`}
    >
      <div className={`${flexBetween} w-5/6 mx-auto`}>
        {/* Left Side */}
        <div className="gap-16 w-1/6">
          <img src={Logo} alt="Logo" className="w-28" />
        </div>
        {/* Right Side */}
        {!isMediaLarge ? (
          <div className={`${flexBetween} w-[65%]`}>
            <div className={`${flexBetween} gap-10`}>
              <Link
                page="Home"
                setSelectedPage={setSelectedPage}
                selectedPage={selectedPage}
              />
              <Link
                page="Benefits"
                setSelectedPage={setSelectedPage}
                selectedPage={selectedPage}
              />
              <Link
                page="Our Classes"
                setSelectedPage={setSelectedPage}
                selectedPage={selectedPage}
              />
              <Link
                page="Contact Us"
                setSelectedPage={setSelectedPage}
                selectedPage={selectedPage}
              />
            </div>
            <div className={`${flexBetween} gap-8`}>
              <p className="hover:text-primary-500 hover:cursor-pointer">Sign In</p>
              <ActionButton setSelectedPage={setSelectedPage}>
                Become a Master
              </ActionButton>
            </div>
          </div>
        ) : (
          <div
            className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center drop-shadow-sm cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Bars3Icon className="w-5 h-5 text-white" />
          </div>
        )}
        <div className="absolute top-0 right-0">{isMenuOpen && menu()}</div>
      </div>
    </nav>
  );
};

export default Navbar;
