import { SelectedPage } from "@/shared/types";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ContactUsImage from "@/assets/ContactUsPageGraphic.png";
import { motion } from "framer-motion";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

type Props = {
  setSelectedPage: (selectedPage: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    reset();
  };

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const inputStyle = `w-full bg-primary-300 border border-primary-100 rounded-md px-4 py-2 placeholder-white focus:outline-none focus:ring-2 focus:ring-gray-300`;

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const transition = {
    duration: 0.5,
  };

  return (
    <section id="contactus" className="w-full min-h-100">
      <div className="w-5/6 mx-auto py-28 space-y-8 md:space-y-2">
        {/* Headline */}
        <motion.div
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={transition}
          variants={{
            hidden: { opacity: 0, x: -150 },
            visible: { opacity: 1, x: 0 },
          }}
          className="space-y-4 md:w-3/6 w-11/12"
        >
          <div>
            <span className="text-primary-500 font-bold text-3xl">
              JOIN NOW
            </span>{" "}
            <span className="font-bold text-3xl"> TO GET IN SHAPE</span>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col item-start justify-center md:flex-row space-y-8 w-full">
          {/* Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={transition}
            variants={{
              hidden: { opacity: 0, x: -150 },
              visible: { opacity: 1, x: 0 },
            }}
            className="md:basis-2/4 items-center justify-start flex"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 md:w-5/6 w-11/12"
            >
              <div>
                <input
                  className={inputStyle}
                  placeholder="Name"
                  {...register("name", {
                    required: "Name is required",
                    maxLength: 50,
                  })}
                />
                {errors.name && (
                  <span className="text-primary-500">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div>
                <input
                  className={inputStyle}
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: emailPattern,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-primary-500">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div>
                <textarea
                  rows={4}
                  cols={50}
                  className={inputStyle}
                  placeholder="Your Message"
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && (
                  <span className="text-primary-500">
                    {errors.message.message}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="w-[45%] bg-secondary-400 border border-primary-100 rounded-md px-4 py-2 placeholder-white focus:outline-none focus:ring-2 focus:ring-gray-300 hover:bg-primary-500 hover:border-primary-500 hover:text-white hover:transition hover:cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ x: "50%" }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:basis-2/4 items-center justify-center flex"
          >
            <div className="relative z-[20]">
              <div className="md:after:content-evolvetext after:absolute after:-bottom-[20%] after:-left-[43%] after:z-[-1]">
                <img src={ContactUsImage} alt="Contact Us" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
