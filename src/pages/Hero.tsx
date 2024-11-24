import enterAnimate from "../utils/enterAnimate";
import { motion } from "framer-motion";
import useRefInView from '../hooks/useRefInView';

export const Hero = () => {
    const [ref1, inView1] = useRefInView();
    const [ref2, inView2] = useRefInView();
    const [ref3, inView3] = useRefInView();
    const [ref4, inView4] = useRefInView();
    const [ref5, inView5] = useRefInView();

    return (
        <div className="container mt-[5.5rem]">
            <div className=" flex flex-col gap-4 hero-section md:items-center lg:text-center lg:items-center ">
                <motion.p
                    ref={ref1}
                    {...enterAnimate(0.3, inView1)}
                >
                    Hey there! I am
                </motion.p>
                <motion.h1
                    ref={ref2}
                    {...enterAnimate(0.4, inView2)}
                    className="font-extrabold text-4xl gradient-text md:text-5xl lg:text-[6rem] lg:leading-none"
                >
                    LUIS MIGUEL CRUZ
                </motion.h1>
                <motion.p
                    ref={ref3}
                    {...enterAnimate(0.5, inView3)}
                    className="max-w-2xl text-sm lg:text-base"
                >
                    I am a <span className="font-bold">Front-end Developer </span>
                    based in the Philippines. I love designing and building websites and gradually exploring various
                    of technologies to maximize my skills.
                </motion.p>
                <div className="flex pt-5 gap-5">
                    <motion.a
                        href="#contact"
                        ref={ref4}
                        {...enterAnimate(0.6, inView4)}
                        className="solid-button"
                    >
                        contact me
                    </motion.a>
                    <motion.a
                        href="/CRUZ-LUIS_RESUME.pdf"
                        download="CRUZ-LUIS_RESUME.pdf"
                        ref={ref5}
                        {...enterAnimate(0.7, inView5)}
                        className="outlined-button"
                    >
                        resume
                    </motion.a>
                </div>
            </div>
        </div>
    )
}
