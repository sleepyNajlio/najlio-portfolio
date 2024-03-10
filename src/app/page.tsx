import Image from "next/image";
import About from "@/components/about";
import HeroSection from "@/components/HeroSection";
import Parallax from "@/components/Parallax";
import Footer from "@/components/Footer";
import { Button, ButtonGroup } from "@nextui-org/react";
import TechStack from "@/components/techStackSection";



export default function Home() {


  return (
    <>
      <HeroSection />
      {/* <LogoCarousel /> */}
      <section className=" p-3 md:py-20">
        <Parallax baseVelocity={-2} />
      </section>
      <section className=" m-4 p-3 md:py-20 flex justify-center items-center ">
        <Button color="secondary" variant="faded" >
          Loading
        </Button>
      </section>
      <section className=" p-3 md:py-20">
        <TechStack />
      </section>
      <Footer />
    </>
  );
}
