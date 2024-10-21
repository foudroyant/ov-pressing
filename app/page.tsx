import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import { Header } from "./components/header";
import { Feature } from "./components/features";
import { Content_1, Content_2 } from "./components/content";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Content_2 />
      <Feature />
      <Content_1 />
      <Footer />
    </>  
  );
}
