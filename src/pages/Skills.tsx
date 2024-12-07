import { motion, Variants } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaFigma, FaFileExcel } from "react-icons/fa";
import { SiJavascript, SiExpress, SiTailwindcss, SiCanva, SiAdobephotoshop, SiMysql } from "react-icons/si";

interface SkillsProps {
  id: string;
}

export const Skills: React.FC<SkillsProps> = () => {

  const stackList = [
    { tech: "HTML5", icon: <FaHtml5 /> },
    { tech: "CSS3", icon: <FaCss3Alt /> },
    { tech: "JavaScript", icon: <SiJavascript /> },
    { tech: "React", icon: <FaReact /> },
    { tech: "NodeJS", icon: <FaNodeJs /> },
    { tech: "Express", icon: <SiExpress /> },
    { tech: "TailwindCSS", icon: <SiTailwindcss /> },
    { tech: "MySQL", icon: <SiMysql /> },
    { tech: "Excel", icon: <FaFileExcel /> },
    { tech: "Figma", icon: <FaFigma /> },
    { tech: "Canva", icon: <SiCanva /> },
    { tech: "Photoshop", icon: <SiAdobephotoshop /> },
  ];

  const serviceList = [
    {
      service: "Web Development",
      desc: "Develop a responsive and user-friendly web application tailored to your needs.",
      image: "./Web Development.png",
    },
    {
      service: "Graphic Design",
      desc: "Creating unique designs that effectively communicate your brand’s identity.",
      image: "./Graphic Design.png",
    },
    {
      service: "Web Design",
      desc: "Designing simple and user-friendly websites that are visually appealing and easy to navigate.",
      image: "./Web Design.png",
    },
  ];

  const stackVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.4 },
    },
  };

  const serviceImageVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.4 },
    },
  };

  const serviceNameVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.4 },
    },
  };

  const serviceDescVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.4 },
    },
  };

  const containerStackVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const containerServiceVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  return (
    <div id="skills" className="section z-10">
      <div className="container">
        <h1 className="header pb-5">Tech Stack</h1>
        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerStackVariants}
        >
          <div className="flex gap-10 justify-center flex-wrap max-w-sm md:max-w-lg lg:max-w-3xl">
            {stackList.map(({ tech, icon }) => (
              <motion.div
                key={tech}
                className="flex gap-3 items-center"
                variants={stackVariants}
              >
                <div className="text-baseColor text-6xl">{icon}</div>
                <p>{tech}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="pt-28 pb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1 className="header" variants={serviceImageVariants}>
            My Services
          </motion.h1>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerServiceVariants}
        >
          {serviceList.map(({ service, desc, image }) => (
            <motion.div
              key={service}
              className="flex flex-col p-3 text-center bg-baseWhiteBg/75 rounded-lg shadow-md"
            >
              <motion.img
                src={image}
                alt={service}
                className="mb-4"
                variants={serviceImageVariants}
              />

              <motion.h2
                className="gradient-text text-2xl font-semibold pb-3"
                variants={serviceNameVariants}
              >
                {service}
              </motion.h2>

              <motion.p variants={serviceDescVariants}>
                {desc}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
