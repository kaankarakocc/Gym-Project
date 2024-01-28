import React from "react";
import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = (props: Props) => {
  const linkStyle =
    "hover:text-secondary-500 hover:transition hover:cursor-pointer";

  const boxStyle = (num: number) => {
    return `basis-${num}/6 flex flex-col space-y-4 mx-8`;
  };

  return (
    <section className="w-full bg-primary-100 py-20">
      <div className="w-5/6 mx-auto flex flex-col md:flex-row md:h-48 md:items-start space-y-8 md:space-y-0">
        {/* Logo - DESC*/}
        <div className={boxStyle(3)}>
          <img src={Logo} alt="Logo" className="w-28" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quibusdam, voluptatibus, quia, voluptatem voluptatum quos
            exercitationem officia quas quod doloribus fugit! Quisquam
            quibusdam, voluptatibus, quia, voluptatem voluptatum quos
            exercitationem officia quas quod doloribus fugit!
          </p>
        </div>

        {/* Links */}
        <div className={boxStyle(2)}>
          <h1 className="text-xl font-bold">Links</h1>
          <ul className="space-y-2">
            <li className={linkStyle}>Home</li>
            <li className={linkStyle}>Benefits</li>
            <li className={linkStyle}>Our Classes</li>
            <li className={linkStyle}>Contact Us</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className={boxStyle(2)}>
          <h1 className="text-xl font-bold">Contact Us</h1>
          <p>Phone: 123-456-7890</p>
          <p>Email: test@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
