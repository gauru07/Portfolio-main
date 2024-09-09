import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"
import { SiExpress } from "react-icons/si"
import { SiTensorflow } from "react-icons/si"
import { DiPython } from "react-icons/di"
import { SiJupyter } from "react-icons/si"
import {motion} from "framer-motion"

const iconVariants = (duration) => ({
    initial: {y:-10},
    animate: {
        y:[10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:1.5}}
            className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-10}}
            transition={{duration:1.5}}
            className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaReact className="text-5xl text-cyan-400"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-5xl text-green-400"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiExpress className="text-5xl text-dark-400"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-5xl text-green-400"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(4.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTensorflow className="text-5xl text-orange-400"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiPython className="text-5xl text-dark-400"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(5.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiJupyter className="text-5xl text-orange-400"/>
            </motion.div>
        </motion.div>
      
    </div>
  )
}

export default Technologies
