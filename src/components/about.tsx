"use client"

import Image from "next/image";
import CustomButton from "./CustomButton";
import Logo from "./logo";

export default function About(props: any) {
    return (
        <>
            <section id="about" className="flex flex-col justify-between items-center md:flex-row ">
                <div className="h-1/2">
                    <Image src="/hero.png" alt="" width={300} height={100} className="size-full " />
                </div>
                <div className="text-center flex">
                    <h1 className="text-3xl font-bold">{props?.title}</h1>
                    <p className="text-lg">{props?.description}</p>
                    <CustomButton className="" />
                </div>
                <Logo />
            </section>
        </>


    );
}
