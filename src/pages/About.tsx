import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AboutProps {
  id: string;
}

export const About: React.FC<AboutProps> = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.6 } },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { ease: 'easeOut', duration: 0.8 } },
  };

  return (
    <div id="about" className="section bg-secondWhiteBg ">
      <div className="container">
        <h1 className="header">About</h1>
        <div className="flex flex-col gap-10 items-center md:flex-row">

          <motion.img
            ref={sectionRef}
            src="./cass.jpg"
            alt="cass"
            className="w-full max-w-sm rounded-full"
            variants={imageVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          />

          <motion.div
            ref={sectionRef}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-col gap-5"
          >
            <motion.h2
              className="text-baseColor text-3xl font-semibold"
              variants={textVariants}
            >
              Luis Miguel Cruz
            </motion.h2>
            <motion.p variants={textVariants}>
              I am currently a 4th year Computer Science student at Our Lady of Fatima University.
              I am a Front-end developer who's continuously learning and exploring various technologies to improve myself.
            </motion.p>
            <motion.p variants={textVariants}>
              I’m mostly drawn to anything that relates to design, which is why I love being a Frontend developer.
              In every project, whether personal or school-related, I take responsibility for crafting the visuals and layout, ensuring everything feels cohesive and engaging.
            </motion.p>
          </motion.div>

        </div>
      </div>
    </div>
  );
};
