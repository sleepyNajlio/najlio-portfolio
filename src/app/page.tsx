import Image from "next/image";
import About from "@/components/about";
import HeroSection from "@/components/HeroSection";
import Parallax from "@/components/Parallax";
import Footer from "@/components/Footer";



export default function Home() {


  return (
    <>
      <HeroSection />
      {/* <LogoCarousel /> */}
      <section className=" p-3  md:py-20">
        <Parallax baseVelocity={-2} />
      </section>
      <section className="p-3 md:py-20">
        <About />
      </section>
      <Footer />
    </>
  );
}
