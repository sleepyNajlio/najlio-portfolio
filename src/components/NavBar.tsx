"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";
import Logo from "./logo";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";



const links = [
  { url: "#about", title: "About" },
  { url: "/project", title: "Projects" },
  { url: "/contact", title: "Contact" },
];


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setIsScrolled(isScrolled);
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      // Clean up the event listener on component unmount
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <nav className="fixed left-0 top-0 z-10 w-full p-2 bg-backgroundColor ">
      <div className="w-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
        {/* SOCIAL */}
        <div className="flex h-full gap-4 ">
          <Link href="/">
            <FaGithub className="text-accentColor" />
          </Link>
          <Link href="/">
            <CiLinkedin className="text-accentColor" />
          </Link>
        </div>
        {/* LOGO */}
        <div className=" flex justify-center basis-2/3">
          <Logo />
        </div>
        {/* LINKS */}
        <div className="hidden gap-4 md:flex md:w-1/2 lg:w-1/5 ">
          {links.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
        </div>
        {/* RESPONSIVE MENU */}
        <div className="md:hidden ">
          {/* MENU BUTTON */}
          <button
            className="w-10 h-8 flex flex-col justify-between z-50 relative"
            onClick={() => setOpen((prev) => !prev)}
          >
            <motion.div
              variants={topVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-accentColor rounded origin-left"
            ></motion.div>
            <motion.div
              variants={centerVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-accentColor rounded"
            ></motion.div>
            <motion.div
              variants={bottomVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-accentColor rounded origin-left"
            ></motion.div>
          </button>
          {/* MENU LIST */}
          {open && (
            <motion.div
              variants={listVariants}
              initial="closed"
              animate="opened"
              className="absolute top-0 left-0 w-screen h-screen bg-backgroundColor/90 text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
            >
              {links.map((link) => (
                <motion.div
                  variants={listItemVariants}
                  className=""
                  key={link.title}
                >
                  <Link href={link.url}>{link.title}</Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


