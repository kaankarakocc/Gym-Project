import { BenefitsCard, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  benefit: BenefitsCard;
  setSelectedPage: (page: SelectedPage) => void;
};

const Card = ({ benefit, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
      }}
      className="w-full border-2 p-5 flex items-center justify-center flex-col space-y-4 rounded-md border-gray-300"
    >
      <div className="rounded-full w-12 h-12 bg-primary-100 border-2 border-gray-300 flex items-center justify-center">
        {benefit.icon}
      </div>
      <div>
        <p className="font-bold">{benefit.title}</p>
      </div>
      <div className="w-full item-center justify-center flex">
        <p className="font-regular w-[80%] text-pretty">{benefit.desc}</p>
      </div>
      <a
        href={SelectedPage.ContactUs}
        className="text-primary-300 font-bold"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        Learn More
      </a>
    </motion.div>
  );
};

export default Card;
