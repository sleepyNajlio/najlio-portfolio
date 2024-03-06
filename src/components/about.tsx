"use client"

import Image from "next/image";
import CustomButton from "./CustomButton";
import Logo from "./logo";

export default function About() {
return (
    <>
    <section className="flex flex-col justify-between items-center md:flex-row ">
            <div className="h-full">
                <Image src="/hero.png" alt="" width={300} height={100} className="size-full "/>
            </div>
            <div className="text-center">
                <h1 className="text-3xl font-bold">About</h1>
                <p className="text-lg">This is a simple Next.js app with Tailwind CSS and TypeScript.</p>
            </div>
            <CustomButton className="" />
            <Logo />
    </section>
    </>


);
}
