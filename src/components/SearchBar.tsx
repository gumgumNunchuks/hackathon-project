import { IconSearch } from '@tabler/icons-react'
import { Combobox } from '@headlessui/react'
import { useState, useEffect } from 'react'

function SearchBar() {
    const [searchText, setSearchText] = useState("")
    const [places, _setPlaces] = useState([{ name: "Gachibowli" }, { name: "Puducherry" }])
    const [selectedPlace, setSelectedPlace] = useState(places[0])

    const filteredPlaces =
        searchText === ''
            ? places
            : places.filter((place) => {
                return place.name.toLowerCase().includes(searchText.toLowerCase())
            })

    useEffect(() => {
        setSearchText(selectedPlace.name)
    }, [selectedPlace])

    return (
        <div className="relative rounded-full max-w-md w-full flex gap-2 py-2 px-4 bg-transparent text-white border border-white">
            <Combobox value={selectedPlace} onChange={setSelectedPlace}>
                <IconSearch />
                <Combobox.Input
                    className='w-full outline-none border-none bg-transparent'
                    value={searchText}
                    onChange={(e) => { setSearchText(e.target.value) }}
                />
                <Combobox.Options className='absolute left-0 mt-10 bg-white w-full rounded-lg overflow-hidden'>
                    {filteredPlaces.map((place, index) => (
                        <Combobox.Option key={index} value={place} className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-teal-600 text-white' : 'text-gray-900'
                            }`
                        }>
                            {place.name}
                        </Combobox.Option>
                    ))}
                </Combobox.Options>
            </Combobox>
        </div>
    )
}

export default SearchBar
