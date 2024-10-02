import { CarProps, FilterProps } from "@/types";
import { clothes } from '@/constants'

export async function fetchCars(filters:FilterProps) {
    const {marca, talla, tipo, limit} = filters;
    // const headers = {
	// 	'x-rapidapi-key': '8de5f48cd4msh1810cbde2b5d906p12d04bjsn2c0c5e145341',
	// 	'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	// }

    // const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
    //     headers: headers,
    // });

    let result: { title: string; brand: string; size: string; sizeComplete: string; img: string; price: string; type: string; imgSlider:Array<string> }[] = [];
    const manufacturerUpperCase = marca.charAt(0).toUpperCase() + marca.slice(1)
    
    result = clothes;
    if (marca !== ""){
        if (marca === "ca"){
            result = result.filter(producto => producto.brand === 'C&A');
        }else {
            if (marca === "hm"){
                result = result.filter(producto => producto.brand === 'H&M');
            }
            else{
                result = result.filter(producto => producto.brand === manufacturerUpperCase);
            }
        }
        
        
    }
    if (talla !== ""){
        result = result.filter(producto => producto.size === talla);
    }
    if (tipo !== ""){
        result = result.filter(producto => producto.type === tipo);
    }

   

    return result;

}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };

 

  export const updateSearchParams = (type: string, value: string) => {
    // Get the current URL search params
    const searchParams = new URLSearchParams(window.location.search);
  
    // Set the specified search parameter to the given value
    searchParams.set(type, value);
  
    // Set the specified search parameter to the given value
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
    return newPathname;
  };