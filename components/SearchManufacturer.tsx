"use client"
import { Combobox, Transition, ComboboxButton, ComboboxInput, ComboboxOptions, ComboboxOption } from '@headlessui/react'
import Image from 'next/image'
import { SetManufacturerProps } from '@/types'
import { manufacturers } from '@/constants'
import { Fragment, useState } from 'react'


const SearchManufacturer = ({manufacturer, setManufacturer}: SetManufacturerProps) => {
    const [query, setQuery] = useState("")
    const filteredManufacturers = query === "" ?
    manufacturers : manufacturers.filter ((item) => (
        item.toLocaleLowerCase()
        .replace(/\s+/g, "").includes(query.toLocaleLowerCase().replace(/\s+/g, ""))
    ))

    return (
    <div className='search-manufacturer'>
        <Combobox value={manufacturer} onChange={setManufacturer}>
            <div className='relative w-full'>
                <ComboboxButton className="absolute top-[12px]">
                    <Image
                    src="/clothing-logo.png"
                    width={22}
                    height={22}
                    className="ml-4"
                    alt="Clothing Logo"
                    />
                </ComboboxButton>

                <ComboboxInput
                className="search-manufacturer__input"
                placeholder='Marca'
                displayValue={(manufacturer: string) => manufacturer}
                onChange={(e) => setQuery(e.target.value)}
                />

                <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery("")}
                >
                    <ComboboxOptions >
                        {
                            filteredManufacturers.map((item) => (
                                <ComboboxOption
                                key={item}
                                className={({active}) => `
                                relative search-manufacturer__option
                                ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}
                                `}
                                value={item}
                                >
                                    {item}
                                </ComboboxOption>
                            )
                        )}
                    </ComboboxOptions>
                </Transition>
                
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer