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
              I recently graduated from Our Lady of Fatima University - Quezon City with a degree in Computer Science.
              I’ve always been drawn to finding patterns and solving problems, which fuels my passion for working with data,
              from <span className="font-bold">cleaning and organizing datasets to analyzing
                and visualizing insights that support smarter decisions. </span>
            </motion.p>

            <motion.p variants={textVariants}>
              I’ve built hands-on experience with SQL, Excel, and Visualization tools, using them to explore data,
              and present findings in a clear and meaningful way. What drives me is the opportunity to <span className="font-bold">
                turn the complex data into a clear actionable insights </span>that shows a story behind the data.
            </motion.p>

            <motion.p variants={textVariants}>
              For me, data is not just numbers, it can give you a narrative to solve real-world problems and
              create opportunities. I'm on a journey of using my skills on practical projects where I can contribute
              on data-driven decision-making.
            </motion.p>


          </motion.div>

        </div>
      </div>
    </div>
  );
};
