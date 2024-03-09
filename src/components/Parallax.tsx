"use client"
// import "./styles.css";
import { useRef, ReactNode } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import {
    SiTailwindcss,
    SiFramer,
    SiJavascript,
    SiTypescript,
    SiPostgresql,
    SiPrisma,
    SiNestjs,
    SiVercel,
    SiMysql,
    SiSequelize,
    SiSqlalchemy,
    SiDjango,
    SiPhp,
    SiPostman
} from 'react-icons/si'
import { TbBrandNextjs, TbBrandCpp } from 'react-icons/tb'
import { FaReact, FaPython, FaCss3, FaHtml5, FaDocker, FaGitAlt } from 'react-icons/fa'

const logos = [
    <TbBrandCpp className="text-accentColor " size={44} />,
    <FaPython className="text-accentColor " size={44} />,
    <SiTypescript className="text-accentColor " size={44} />,
    <SiPhp className="text-accentColor " size={44} />,
    <SiJavascript className="text-accentColor " size={44} />,
    <FaHtml5 className="text-accentColor " size={44} />,
    <FaCss3 className="text-accentColor  " size={44} />,
    <FaReact className="text-accentColor " size={44} />,
    <TbBrandNextjs className="text-accentColor " size={44} />,
    <SiTailwindcss className="text-accentColor " size={44} />,
    <SiFramer className="text-accentColor " size={44} />,
    <SiDjango className="text-accentColor " size={44} />,
    <SiNestjs className="text-accentColor " size={44} />,
    <SiPostgresql className="text-accentColor " size={44} />,
    <SiMysql className="text-accentColor " size={44} />,
    <SiPrisma className="text-accentColor " size={44} />,
    <SiSequelize className="text-accentColor " size={44} />,
    <SiSqlalchemy className="text-accentColor " size={44} />,
    <FaDocker className="text-accentColor " size={44} />,
    <SiVercel className="text-accentColor " size={44} />,
    <SiPostman className="text-accentColor " size={44} />,
    <FaGitAlt className="text-accentColor " size={44} />,

]

interface ParallaxProps {
    baseVelocity: number;
}

export default function Parallax({ baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-20, -80, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    /**
     * The number of times to repeat the child text should be dynamically calculated
     * based on the size of the text and viewport. Likewise, the x motion value is
     * currently wrapped between -20 and -45% - this 25% is derived from the fact
     * we have four children (100% / 4). This would also want deriving from the
     * dynamically generated number of children.
     */
    return (
        <div className="parallax overflow-hidden m-0 whitespace-nowrap flex flex-nowrap ">
            <motion.div className="scroller font-semibold uppercase text-6xl flex whitespace-nowrap flex-nowrap "
                style={{ x }}
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        duration: 2,
                        delay: 1,
                        ease: "linear",
                    }
                }}
            >
                {[...logos, ...logos, ...logos].map((child, index) => (
                    <span key={index} className="block mr-8">
                        {child}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
