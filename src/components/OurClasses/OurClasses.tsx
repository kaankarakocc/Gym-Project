import { OurClassesCard, SelectedPage } from "@/shared/types";
import React from "react";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import ClassCard from "./ClassCard";
import { motion } from "framer-motion";

const datas: OurClassesCard[] = [
  {
    id: 1,
    image: image1,
    title: "Yoga Training Session",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 2,
    image: image2,
    title: "Cardio Training Session",
  },
  {
    id: 3,
    image: image3,
    title: "Aerobics Training Session",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 4,
    image: image4,
    title: "Strength Training Session",
  },
  {
    id: 5,
    image: image5,
    title: "Muscle Training Session",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 6,
    image: image6,
    title: "Weight Training Session",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];

type Props = {
  setSelectedPage: (page: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section
      id={SelectedPage.OurClasses}
      className="w-full bg-primary-100 min-h-full py-10"
    >
      <div className="w-full mx-auto space-y-8 px-2">
        {/* Top */}
        <div className="flex justify-center items-center flex-col w-full ">
          <h1 className="text-4xl font-bold text-center py-10">Our Classes</h1>
          <div className="w-[80%]">
            <p className="tracking-wider text-regular">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi qui
              ducimus necessitatibus alias? Nobis porro officiis perferendis
              debitis, numquam cupiditate. Aliquam, consequuntur minus.
              Quibusdam magnam iusto repudiandae, ipsa explicabo labore?
            </p>
          </div>
        </div>
        {/* Bottom */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="max-w-full overflow-x-auto"
        >
          <div className="whitespace-nowrap flex gap-8 w-[2900px] py-5">
            {datas.map((data: OurClassesCard, index) => {
              return <ClassCard key={index} data={data} />;
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurClasses;
