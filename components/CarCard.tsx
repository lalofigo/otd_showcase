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
    // <div className="car-card group" onClick={()=>setIsOpen(true)}>
    //     <div className="flex w-full max-w-6xl">
    //         <div className="w-5/6">
    //             <div className="car-card__content">
    //                 <h2 className="car-card__conetnt-title"> {title} </h2>
    //             </div>
    //         </div>

    //         <div className="w-1/6">
    //             <p className="flex mt-0 text-[24px] font-extrabold">
    //                 <span className="self-start text-[14px] font-semibold">
    //                 $
    //                 </span>
    //                 {price}
    //             </p>
    //         </div>
    //     </div>

    //     <div className="relative w-full h-56 my-3 object-contain">
    //         {
    //             loading && (
    //                 <div className="absolute inset-0 flex justify-center items-center bg-gray-200 bg-opacity-50 z-10">
    //                     <div className="w-12 h-12 border-4 border-t-4 border-t-blue-600 border-gray-200 rounded-full animate-spin"></div>
    //                 </div>
    //             )
    //         }
    //         <Image src={img} alt="clothe photo"
    //         fill priority className="object-contain" sizes="100%" quality={55}
    //         onLoad={() => setLoading(false)}/>

    //     </div>

    //     <div className="relative flex w-full mt-2">
    //         <div className="flex w-full justify-between text-gray">
    //             <div className=" flex flex-col justify-center items-center gap-2">
    //                 <Image src="/brand-icon.png" width={20} height={20} alt="marca"/>
    //                 <p className="text-[14px]">
    //                     {brand}
    //                 </p>
    //             </div>
    //             <div className=" flex flex-col justify-center items-center gap-2">
    //                 <Image src="/size-icon.png" width={22} height={22} alt="talla"/>
    //                 <p className="text-[14px]">
    //                     {sizeComplete}
    //                 </p>
    //             </div>
    //             {/* <div className=" flex flex-col justify-center items-center gap-2">
    //                 <Image src="/gas.svg" width={20} height={20} alt="city"/>
    //                 <p className="text-[14px]">
    //                     {city_mpg} MPG
    //                 </p>
    //             </div> */}
    //         </div>

    //         {/* <div className="car-card__btn-container">
    //             <CustomButton
    //             title="View More"
    //             containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
    //             textStyles="text-white text-[14px] leading-[17px] font-bold"
    //             rightIcon="/right-arrow.svg"
    //             handleClick={()=>setIsOpen(true)}
    //             />

    //         </div> */}
    //     </div>
    //     <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
    // </div>


    <div className="relative mb-0 flex w-full  max-w-sm
    flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md xs:m-auto sm:m-auto">
        <div className="relative mx-3 mt-3 flex h-96 overflow-hidden rounded-xl">
            {
                loading && (
                    <div className="absolute inset-0 flex justify-center items-center bg-gray-200 bg-opacity-50 z-10">
                        <div className="w-12 h-12 border-4 border-t-4 border-t-blue-600 border-gray-200 rounded-full animate-spin"></div>
                    </div>
                )
            }
            <Image
            src={img}
            alt="product image"
            layout="fill"
            objectFit="cover"
            quality={50}
            sizes="(max-width: 768px) 60vw, (max-width: 1200px) 50vw, 33vw"
            objectPosition="center 12%"
            onLoad={() => setLoading(false)}
            />
            <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2
            text-center text-sm font-medium text-white">{brand}</span>
        </div>
        <div className="mt-4 px-5 pb-5">
           <h5 className="text-lg  text-slate-900 truncate whitespace-nowrap overflow-hidden">{title}</h5>
           <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                    <span className="text-3xl font-bold text-slate-900">${price}</span>
                </p>
                <div className="flex items-center">
                    <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs
                    font-semibold">{sizeComplete}</span>
                </div>
            </div>
        </div>
    </div>

  )
}

export default CarCard