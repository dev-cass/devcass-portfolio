import { useRef } from "react";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

interface ContactProps {
  id: string;
}

export const Contact: React.FC<ContactProps> = () => {
  const contactRef = useRef(null);
  const isInView = useInView(contactRef, { once: true, margin: "-10%" });

  const socialList = [
    { social: "Github", icon: <FaGithub />, link: "https://github.com/dev-cass" },
    { social: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/luis-miguel-cruz-b95328255/" },
    { social: "Instagram", icon: <FaInstagramSquare />, link: "https://www.instagram.com/_lmcruz/" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  
  return (
    <div id="contact" className="section">
      <motion.div
        ref={contactRef}
        className="container py-[8rem] flex flex-col text-center items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h1 className="header" variants={itemVariants}>
          Let's Get in Touch!
        </motion.h1>
        <motion.p className="max-w-2xl" variants={itemVariants}>
          Thank you for taking an interest in me. If you have any questions or want to collaborate on a project,
          just hit me up in my socials.
        </motion.p>
        <motion.h2
          className="text-baseBlack text-xl font-semibold py-8 md:text-3xl"
          variants={itemVariants}
        >
          luismigueldrcruz@gmail.com
        </motion.h2>
        <motion.div
          className="flex gap-5 justify-center"
          variants={containerVariants}
        >
          {socialList.map(({ social, icon, link }) => (
            <motion.a
              key={social}
              href={link}
              target="_blank"
              className="flex gap-2 items-center"
              variants={itemVariants}
            >
              <p className="hidden text-baseColor font-semibold text-lg md:block">{social}</p>
              <div className="text-baseColor text-3xl md:text-xl">{icon}</div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
