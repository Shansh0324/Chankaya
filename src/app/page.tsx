import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Image from "next/image";
import AIInputBar from "@/components/AIInputBar";
import About from "@/components/About";
import Gallery from "@/components/Gallery";

export default function Home() {
  // Define your card data using the image from your assets folder

  return (
     <>
       <Navbar />
       <Hero />
       <AIInputBar />
       <About />
       <Gallery />
     </>
  );
}
