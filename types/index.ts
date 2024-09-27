import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title:string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SetManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer:string) => void;

}

export interface CarProps {
    // city_mpg:number;
    // class:string;
    // combination_mpg:number;
    // cylinders:number;
    // displacement:number;
    // drive:string;
    // fuel_type:string;
    // highway_mpg:number;
    // make:string;
    // model:string;
    // transmission:string;
    // year:number;
    title: string, 
    brand: string, 
    size: string, 
    sizeComplete: string,
    img: string,
    price: string,
    imgSlider:Array<string>,

}

export interface FilterProps {
    marca: string,
    talla: string,
    tipo: string,
    limit: number,
    model: string,
  }

  export interface OptionProps {
    title: string;
    value: string;
  }

  export interface CustomFilterProps {
    title:string;
    options: OptionProps[]
  }
  export interface HomeProps {
    searchParams: FilterProps;
  }
  export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
  }
  