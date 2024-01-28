import React from "react";
import HomeContent from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Sponsor1 from "@/assets/SponsorForbes.png";
import Sponsor2 from "@/assets/SponsorFortune.png";
import Sponsor3 from "@/assets/SponsorRedBull.png";

const sponsorArray = [Sponsor1, Sponsor2, Sponsor3];

type Props = {
  setSelectedPage: (page: SelectedPage) => void;
  selectedPage: SelectedPage;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section id="home" className="bg-gray-20 h-screen">
      <div className="w-5/6 mx-auto h-[85%] flex items-center justify-center md:flex-row flex-col">
        {/* Left Side (Header - Logo)*/}
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:basis-2/4 space-y-4 mt-40 flex flex-col items-start justify-center w-[450px] h-[450px]"
        >
          <div className="relative z-0">
            <div className="md:before:content-evolvetext before:absolute before:-left-16 before:-top-20 before:z-[-1]">
              <img src={HomeContent} alt="logo" />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="max-w-[480px]"
          >
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio,
              ullam excepturi. Repudiandae ratione nesciunt iusto eum
              consequatur doloribus odio aliquid facere animi
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="space-x-6"
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <a
              className="underline text-primary-500 cursor-pointer hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
        {/* Right Side (Image)*/}
        <div className=" md:basis-2/6  flex items-center justify-end">
          <div className="md:w-[500px] md:h-[500px] flex items-center justify-center w-[500px] h-[500px]">
            <img src={HomePageGraphic} alt="logo" />
          </div>
        </div>
      </div>
      <div className="w-full h-[15%] bg-primary-100 hidden md:flex">
        <div className="w-4/6 mx-auto flex items-center justify-between">
          {/* Sponsor Logos */}
          {sponsorArray.map((sponsor, index) => (
            <motion.img
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={sponsor}
              alt="logo"
              className="w-[100px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
