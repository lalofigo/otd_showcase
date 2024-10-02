import { CarProps } from "@/types";
import Image from "next/image";
import {Dialog, DialogPanel, Transition, TransitionChild} from '@headlessui/react'
import { Fragment } from "react";
import PhotoSlider from "./PhotoSlider";

interface CarDetailsProps {
  isOpen:boolean;
  closeModal: () => void;
  car: CarProps;
  
}

const CarDetails = ({isOpen, closeModal, car}:CarDetailsProps) => {
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
                <DialogPanel className="relative w-full max-w-lg p-6
                transform rounded-2xl bg-white  shadow-xl transition-all flex flex-col gap-5
                 max-h-[90vh] overflow-y-auto">
                  <button type="button" onClick={closeModal} className="absolute top-2 right-2 w-fit p-2 bg-primary-blue-100 z-50 rounded-full">
                    <Image src="/close.svg" alt="close" width={20} height={20} className="object-contain"/>
                  </button>
                  <div className="flex-1 flex flex-col gap-3">
                    <PhotoSlider photos={car.imgSlider} />
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
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
                  </div>
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