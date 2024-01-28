import { OurClassesCard } from "@/shared/types";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  data: OurClassesCard;
};

const ClassCard = ({ data }: Props) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
      }}
      className="w-[450px] h-[380px] relative inline-block rounded-md"
    >
      <img src={data.image} alt="pic" className="w-full h-full rounded-md" />
      <div className="w-[450px] h-[380px] whitespace-normal absolute flex items-center justify-center flex-col top-0 left-0 text-wrap p-5 bg-primary-500 opacity-0 hover:opacity-90 transition duration-500 space-y-8 rounded-md">
        <h3 className="text-3xl text-white font-bold">{data.title}</h3>
        <p className="text-center text-light text-white">{data.desc}</p>
      </div>
    </motion.div>
  );
};

export default ClassCard;
