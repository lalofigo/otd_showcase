"use client"
import Image from "next/image"
import CustomButton from "./CustomButton"

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="hero">
        <div className="flex-1 pt-48 padding-x">
            <h1 className="hero__title">
            Descubre y consigue tu estilo ideal en OTD Bazar.
            </h1>
            <p className="hero__subtitle">
            Encuentra tus prendas favoritas -- fácil y rápido!
            </p>

            <CustomButton 
                title="Busca ahora"
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                handleClick={handleScroll}
            />
        </div>
        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/hero.png" alt="hero" fill className="object-contain" priority/>
            </div>
            <div className="hero__image-overlay" />
        </div>
    </div>
  )
}

export default Hero