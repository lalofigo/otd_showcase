import { fetchCars } from "@/utils";
import { HomeProps } from "@/types";
import { talla, tipo, marca} from "@/constants";
import { CarCard, ShowMore, SearchBar, CustomFilter, Hero, CustomButton } from "@/components";


export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    marca: searchParams.marca || "",
    talla: searchParams.talla || "",
    tipo: searchParams.tipo || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;



  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Catálogo</h1>
          <p>Explora todo nuestro catálogo de prendas disponibles. Busca por marca y/o talla.</p>
        </div>

        <div className='home__filters'>
          {/* <SearchBar /> */}
          

          <div className='home__filter-container'>
            <CustomFilter title='marca' options={marca} />
            <CustomFilter title='talla' options={talla} />
            <CustomFilter title='tipo' options={tipo} />
           
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no hay prendas de ese tipo!</h2>
            {/* <p>{allCars?.message}</p> */}
          </div>
        )}
      </div>
    </main>
  );
}