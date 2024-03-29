"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { Button } from "@nextui-org/react";


const HeroSection = () => {
    return (
        <section className="px-3 py-20">
            <div className="grid grid-cols-1 md:flex md:justify-center m-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center md:w-1/3"
                >
                    <Image
                        src="/heroImg.png"
                        alt="Picture of the author"
                        width={400}
                        height={400}
                        style={{ borderRadius: "50%", maxWidth: "100%", height: "auto" }}
                    />
                </motion.div>
                <div className=" md:grid-col-1 md:place-self-center md:w-2/3">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className=" p-4 col-span-8 place-self-center text-center justify-self-center items-center"
                    >
                        <h1 className="text-textColor mb-4 text-4xl sm:text-5xl lg:leading-normal font-extrabold">
                            <span className="text-transparent bg-clip-text bg-gradient-to-l from-primaryColor to-accentColor">
                                Hello, I&apos;m{" "}
                            </span>
                            <br></br>
                            <TypeAnimation
                                sequence={[
                                    "Najlaa",
                                    1000,
                                    "Back-end Developer",
                                    1000,
                                    "Front-end Developer",
                                    1000,
                                    "UI/UX Designer",
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="col-span-8 place-self-center text-center justify-self-center items-center"
                    >
                        <p className="text-textColor text-base md:text-lg mb-6 lg:max-w-screen-md ">
                            A Software Developer with a passion for the web. I thrive in challenging environments, solving problems with a dedicated mind and creative approach.
                            Constantly learning about new technologies, I seek perfection in everything I do. Eager for professional experiences to hone my developing skills.
                        </p>
                        <div className="flex flex-row justify-center  gap-4 sm:flex-row sm:gap-8 ">
                            <Button variant="ghost" radius="md" size='lg'
                                className=""
                            >
                                Resume
                            </Button>
                            <Button variant="light" radius="md" size='lg'
                                className=""
                            // className="border-backgroundColor
                            // bg-primaryColor
                            // text-backgroundColor
                            // hover:text-primaryColor
                            // hover:bg-black"
                            >
                                Contact me
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div >
        </section >
    );
};

export default HeroSection;
