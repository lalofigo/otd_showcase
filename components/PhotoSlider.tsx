import { Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

import Image from "next/image";

const images = [
 'https://via.placeholder.com/600x400?text=Image+1',
 'https://via.placeholder.com/600x400?text=Image+2',
 'https://via.placeholder.com/600x400?text=Image+3',
];

interface PhotoSliderProps {
    photos:Array<string>;
    
  }

const PhotoSlider = ({photos}:PhotoSliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true)
    const goToPrevious = () => {
        setLoading(true)
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? photos.length - 1 : prevIndex - 1
        );
    };
    const goToNext = () => {
        setLoading(true)
        setCurrentIndex((prevIndex) =>
            prevIndex === photos.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative max-w-lg h-[350px] w-[200px] mx-auto">
                <div className="w-full h-full rounded-lg overflow-hidden">
                    {/* <img
                            src={photos[currentIndex]}
                            alt={`Slide ${currentIndex}`}
                            className="w-full h-auto transition-all duration-500 ease-in-out transform"
                        /> */}
                        {
                            loading && (
                                <div className="absolute inset-0 flex justify-center items-center bg-gray-200 bg-opacity-50 z-10">
                                    <div className="w-12 h-12 border-4 border-t-4 border-t-blue-600 border-gray-200 rounded-full animate-spin"></div>
                                </div>
                            )
                        }
                        <Image
                            src={photos[currentIndex]}
                            alt={`Imagen ${currentIndex + 1}`}
                            quality={75}
                            sizes="100%"
                            fill         // Hace que la imagen ocupe todo el contenedor
                            style={{objectFit:"cover"}}       // Hace que la imagen mantenga su proporción
                            priority               // Mejora la carga de la imagen actual
                            onLoad={() => setLoading(false)}/>
                </div>
            <button
                onClick={goToPrevious}
                className="absolute top-1/2 w-10 h-10 bg-primary-blue rounded-full flex items-center 
                justify-center focus:outline-none"
            >
                <Image src="/previous.png" width={20} height={20}
                 alt="previous"/>
            </button>
            <button
                onClick={goToNext}
                className="absolute top-1/2 right-0 w-10 h-10  bg-primary-blue rounded-full flex items-center
                justify-center focus:outline-none"
            >
                <Image src="/next.png" width={20} height={20}
                 alt="previous"/>
            </button>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {photos.map((_, index) => (
            <div
                    key={index}
                    onClick={() => {
                        setLoading(true)
                        setCurrentIndex(index)
                    }}
                    className={`w-3 h-3 rounded-full cursor-pointer ${
                        currentIndex === index ? 'bg-primary-blue' : 'bg-white'
                    }`}
            ></div>
                ))}
            </div>
            </div>
    )
}

export default PhotoSlider