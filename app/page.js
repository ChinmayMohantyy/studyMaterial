import Image from "next/image";
import Hero from "./_component/Hero";
import Reviews from "./_component/Reviews";
import Course from "./_component/Course";
import Explore from "./_component/Explore";
import Header from "./_component/Header";
import Footer from "./_component/Footer";

export default function Home() {
  return (
    <>
        <Header />
        <Hero />
        <Course />
        <Explore />
        <Reviews />
        <Footer />
    </>
  );
}
