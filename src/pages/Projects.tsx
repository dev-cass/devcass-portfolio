import { motion, Variants } from "framer-motion";
import { FaLink } from "react-icons/fa";

interface ProjectsProps {
  id: string;
}

export const Projects: React.FC<ProjectsProps> = () => {

  const imageVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.8 },
    },
  };

  const nameLinkVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.6, delay: 0.2 },
    },
  };

  const descriptionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.6, delay: 0.4 },
    },
  };

  const techStackVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.4,
        delay: 0.6 + index * 0.1,
      },
    }),
  };

  const projectList = [
    {
      name: "MC Power Enterprises",
      desc: `An advertisement website for the MC Power Enterprises Company. 
            This is a school project for the Software Engineering Course. 
            I designed and built the front-end side of the web app.`,
      image: "./MC-Power-Mockup.png",
      tech: ["ReactJS", "TailwindCSS", "Material Tailwind", "NodeJS", "ExpressJS", "MySQL"],
      link: "https://mc-power-enterprises-2-client.vercel.app/",
    },
    {
      name: "Dagitab",
      desc: `A forecasting tool that utilizes a hybrid model LSTM-ANN for visualizing the day-ahead electricity load in Luzon, Philippines. 
            This is our thesis project where I designed and worked on the front-end.`,
      image: "./Dagitab-Mockup.png",
      tech: ["ReactJS", "TailwindCSS", "Python"],
      link: "https://dagitab.vercel.app/",
    },
  ];

  return (
    <div id="projects" className="bg-secondWhiteBg section py-20">
      <div className="container">
        <h1 className="header">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectList.map(({ name, desc, image, tech, link }) => (
            <div key={name} className="shadow-md rounded-2xl flex flex-col">
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="overflow-hidden rounded-t-xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={imageVariants}
              >
                <motion.img
                  src={image}
                  alt={name}
                  className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </motion.a>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="p-5"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.2 },
                  },
                }}
              >
                <motion.div
                  className="flex justify-between items-center mb-5"
                  variants={nameLinkVariants}
                >
                  <h2 className="text-baseBlack text-2xl font-semibold">{name}</h2>
                  <a href={link} target="_blank" className="text-baseColor">
                    <FaLink size={20} />
                  </a>
                </motion.div>

                <motion.p className="mb-4" variants={descriptionVariants}>
                  {desc}
                </motion.p>

                <motion.div className="flex flex-wrap gap-2">
                  {tech.map((techList, techIndex) => (
                    <motion.span
                      key={techList}
                      className="border border-secondGradient text-secondGradient text-sm font-medium py-1 px-3 rounded-full"
                      variants={techStackVariants}
                      custom={techIndex}
                    >
                      {techList}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
