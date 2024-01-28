import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import { SelectedPage } from "./shared/types";
import { useMediaQuery } from "./hooks/useMediaQuery";
import Home from "./components/Home/Home";
import Benefits from "./components/Benefits/Benefits";
import OurClasses from "./components/OurClasses/OurClasses";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );
  const isMediaLarge: boolean = useMediaQuery("(max-width: 1200px)");
  const [isPositionTop, setIsPositionTop] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsPositionTop(false);
      } else {
        setIsPositionTop(true);
        setSelectedPage(SelectedPage.Home);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div>
        <Navbar
          setSelectedPage={setSelectedPage}
          selectedPage={selectedPage}
          isMediaLarge={isMediaLarge}
          isPositionTop={isPositionTop}
        />
        <Home setSelectedPage={setSelectedPage} selectedPage={selectedPage} />
        <Benefits setSelectedPage={setSelectedPage} />
        <OurClasses setSelectedPage={setSelectedPage} />
        <ContactUs setSelectedPage={setSelectedPage} />
        <Footer />
      </div>
    </>
  );
}
export default App;
