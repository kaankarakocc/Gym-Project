import { BenefitsCard, SelectedPage } from "@/shared/types";
import React from "react";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import Card from "./Card";
import BenefitsGraph from "@/assets/BenefitsPageGraphic.png";
import ActionButton from "@/shared/ActionButton";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (page: SelectedPage) => void;
};

const benefits: BenefitsCard[] = [
  {
    id: 1,
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    desc: "We have the best equipment in the industry, and we are constantly upgrading and adding to our facilities.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    desc: "We have the best equipment in the industry, and we are constantly upgrading and adding to our facilities.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const transition = {
  duration: 0.5,
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="w-full bg-white min-h-full py-20">
      <div className="w-5/6 mx-auto  md:px-10 space-y-8">
        {/* Top */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          variants={variants}
          className="space-y-8 flex flex-col items-start justify-center"
        >
          <div className="w-full ">
            <h1 className="text-4xl font-bold">MORE THAN JUST A GYM.</h1>
          </div>
          <div className="w-5/6 md:w-3/6">
            <p className="text-lg">
              We are a community of like-minded people, who have come together
              to provide a safe and supportive environment for you to achieve
              your goals.
            </p>
          </div>
        </motion.div>
        {/* Cards */}
        <motion.div
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={transition}
          variants={{
            hidden: { opacity: 0, x: -150 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <motion.div
            className=" flex gap-8 flex-col item-center justify-center md:flex-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {benefits.map((benefit: BenefitsCard) => {
              return (
                <Card
                  key={benefit.id}
                  benefit={benefit}
                  setSelectedPage={setSelectedPage}
                />
              );
            })}
          </motion.div>
        </motion.div>
        {/* Bottom */}
        <motion.div className="w-full flex flex-col items-center justify-center space-y-8 md:flex-row">
          <div className="md:basis-2/4">
            <img src={BenefitsGraph} alt="benefitsGraph" />
          </div>
          <motion.div
            initial={{ x: "50%" }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:basis-2/4 space-y-8 w-5/6 relative"
          >
            <div className="text-center before:content-abstractwaves before:absolute before:-top-20 before:-left-20">
              <h1 className="font-bold text-3xl">
                MILLIONS OF HAPPY MEMBERS GETTING
              </h1>
              <h1 className="font-bold text-3xl text-primary-500">
                FIT AND HEALTHY WITH US
              </h1>
            </div>
            <div className="space-y-8 w-full text-pretty">
              <p className="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
                ab nostrum debitis, accusamus molestiae, tempora quis dolorem,
                repudiandae asperiores possimus enim soluta qui perferendis
                voluptate.
              </p>
              <p className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
                ut doloremque neque, temporibus velit laboriosam. Totam
                recusandae cumque dolores magnam.
              </p>
            </div>
            <div className="after:content-sparkles after:absolute after:-bottom-20 after:-right-20">
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
