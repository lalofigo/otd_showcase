import { CarProps } from "@/types";
import Image from "next/image";
import {Dialog, DialogPanel, Transition, TransitionChild} from '@headlessui/react'
import { Fragment, useState} from "react";
//import PhotoSlider from "./PhotoSlider";

interface CarDetailsProps {
  isOpen:boolean;
  closeModal: () => void;
  car: CarProps;

}

const CarDetails = ({isOpen, closeModal, car}:CarDetailsProps) => {
  const [loading, setLoading] = useState(car.imgSlider.map(() => true));

  const handleImageLoad = (index: number) => {
    setLoading((prevLoading) => {
      const newLoading = [...prevLoading];
      newLoading[index] = false;
      return newLoading;
    });
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={closeModal}>
          <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex justify-center p-4 text-center min-h-full items-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 sale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="relative w-[90vw] h-[90vh] p-6 transform rounded-2xl
                bg-white shadow-xl transition-all 
                flex flex-col gap-5 overflow-y-auto max-[450px]:p-2">
                  <button type="button" onClick={closeModal} className="absolute top-2 right-2 w-fit p-2 bg-primary-blue-100 z-50 rounded-full">
                    <Image src="/close.svg" alt="close" width={20} height={20} className="object-contain"/>
                  </button>
                  <div className="mt-1">
                    <div className="flex items-center justify-center">
                      <h5 className="text-lg  text-slate-900 mr-3">{car.title}</h5>
                      <p>
                          <span className="text-3xl font-bold text-slate-900">${car.price}</span>
                      </p>
                      <div className="flex items-center">
                          <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs
                          font-semibold">{car.sizeComplete}</span>
                          <span className="left-0 m-2 rounded-full bg-black px-2
                          text-center text-sm font-medium text-white">{car.brand}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-3 justify-center items-center">
                    {/* <PhotoSlider photos={car.imgSlider} /> */}
                    <div className="flex flex-wrap justify-center gap-2">
                      {car.imgSlider.map((img, index) => (
                        <div key={index} className="flex-1 min-w-[270px] max-w-[400px]">
                          {loading[index] && (
                            <div className="absolute inset-0 flex justify-center items-center bg-gray-200 bg-opacity-50 z-10">
                              <div className="w-12 h-12 border-4 border-t-4 border-t-blue-600 border-gray-200 rounded-full animate-spin"></div>
                            </div>
                          )}
                          <Image
                            src={img}
                            alt={`car image ${index + 1}`}
                            width={300}
                            height={200}
                            className="object-cover w-full h-full"
                            onLoad={() => handleImageLoad(index)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-semibold text-xl capitalize">
                      {car.title}
                    </h2>
                    <div className="mt-2 flex flex-wrap gap-3 flex-row-reverse">
                      {Object.entries(car).map(([key,value]) => (
                        key !== "title" && key !== "size" && key !== "img" && key !== "type" && key !== "imgSlider" &&
                        (<div className="flex justify-between flex-auto text-center" key={key}>
                            {
                              key !== 'price' ?
                              <p className="text-black-100 font-normal mt-2">{value}</p>
                              :
                              <span className="bg-orange-400 rounded-full text-white text-lg font-bold px-3 py-2
                              leading-none flex items-center">${value}</span>
                            }

                        </div>)

                      ))}
                    </div>
                  </div> */}
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default CarDetails