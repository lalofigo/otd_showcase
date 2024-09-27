"use client"
import { useState } from "react"
import { CarProps } from "@/types";
import CustomButton from "./CustomButton";
import Image from "next/image";

import CarDetails from "./CarDetails";

interface CarCardProps {
    car: CarProps;
}

const CarCard = ({car}:CarCardProps) => {
  const {title, brand, size, sizeComplete, img, price} = car;
  //const carRent = calculateCarRent(city_mpg, year)
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  return (
    <div className="car-card group" onClick={()=>setIsOpen(true)}>
        <div className="flex w-full max-w-6xl">
            <div className="w-5/6">
                <div className="car-card__content">
                    <h2 className="car-card__conetnt-title"> {title} </h2>
                </div>
            </div>
            
            <div className="w-1/6">
                <p className="flex mt-0 text-[24px] font-extrabold">
                    <span className="self-start text-[14px] font-semibold">
                    $
                    </span>
                    {price}
                </p>
            </div>
        </div>
       
        <div className="relative w-full h-56 my-3 object-contain">
            {
                loading && (
                    <div className="absolute inset-0 flex justify-center items-center bg-gray-200 bg-opacity-50 z-10">
                        <div className="w-12 h-12 border-4 border-t-4 border-t-blue-600 border-gray-200 rounded-full animate-spin"></div>
                    </div>
                )
            }
            <Image src={img} alt="clothe photo"
            fill priority className="object-contain" sizes="100%" quality={55}
            onLoad={() => setLoading(false)}/>
            
        </div>

        <div className="relative flex w-full mt-2">
            <div className="flex group-hover:invisible w-full justify-between text-gray">
                <div className=" flex flex-col justify-center items-center gap-2">
                    <Image src="/brand-icon.png" width={20} height={20} alt="marca"/>
                    <p className="text-[14px]">
                        {brand}
                    </p>
                </div>
                <div className=" flex flex-col justify-center items-center gap-2">
                    <Image src="/size-icon.png" width={22} height={22} alt="talla"/>
                    <p className="text-[14px]">
                        {sizeComplete}
                    </p>
                </div>
                {/* <div className=" flex flex-col justify-center items-center gap-2">
                    <Image src="/gas.svg" width={20} height={20} alt="city"/>
                    <p className="text-[14px]">
                        {city_mpg} MPG
                    </p>
                </div> */}
            </div>

            {/* <div className="car-card__btn-container">
                <CustomButton
                title="View More"
                containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
                textStyles="text-white text-[14px] leading-[17px] font-bold"
                rightIcon="/right-arrow.svg"
                handleClick={()=>setIsOpen(true)}
                />

            </div> */}
        </div>
        <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
    </div>
  )
}

export default CarCard