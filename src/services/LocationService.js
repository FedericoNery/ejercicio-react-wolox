//TODO Ir a buscar a una api online o mockear una 

const countries = [        
    {value: 0, name: "-- Seleccionar país --"},
    {value: 1, name: "Argentina"},
    {value: 2, name: "Chile"},
    {value: 3, name: "Mexico"},
    {value: 4, name: "Colombia"},
    {value: 5, name: "Perú"},
]

const cities = [
        { value: 0, idCountry: 0, name: "-- Seleccionar ciudad --"},
        { value: 1, idCountry: 1, name: "Buenos Aires" },
        { value: 2, idCountry: 1, name: "Córdoba" },
        { value: 3, idCountry: 1, name: "Mendoza" },
        { value: 4, idCountry: 1, name: "Santa Fé" },
        { value: 5, idCountry: 1, name: "Chaco" },
        { value: 6, idCountry: 2, name: "Valparaiso" },
        { value: 7, idCountry: 2, name: "Santiago de Chile" },
        { value: 8, idCountry: 2, name: "La Serena" },
        { value: 9, idCountry: 2, name: "Iquique" },
        { value: 10, idCountry: 2, name: "Viña del Mar" },
        { value: 11, idCountry: 3, name: "México DF" },
        { value: 12, idCountry: 3, name: "Tijuana" },
        { value: 13, idCountry: 3, name: "Monterrey" },
        { value: 14, idCountry: 3, name: "Guadalajara" },
        { value: 15, idCountry: 3, name: "Acapulco" },
        { value: 16, idCountry: 4, name: "Bolívar" },
        { value: 17, idCountry: 4, name: "Boyaca" },
        { value: 18, idCountry: 4, name: "Caldas" },
        { value: 19, idCountry: 4, name: "Cauca" },
        { value: 20, idCountry: 4, name: "Magdalena" },
        { value: 21, idCountry: 5, name: "Lima" },
        { value: 22, idCountry: 5, name: "Cusco" },
        { value: 23, idCountry: 5, name: "Arequipa" },
        { value: 24, idCountry: 5, name: "Huancayo" },
        { value: 25, idCountry: 5, name: "Cajamarca" },
    ]

export const getCountries = () => {
    return countries
}

export const getCitiesByCountryId = (id) => {
    const resultado = cities.filter((item) => item.idCountry === id)
    return [{ value: 0, idCountry: 0, name: "-- Seleccionar ciudad--"},...resultado] 
}

//TODO ES EL MISMO CODIGO, GENERAR METODO GENERICO
export const getCountryById = (id) => {
    const countryEnArray = countries.filter((item) => item.value === id)
    return countryEnArray.length > 0 ? countryEnArray[0] : { }
}

export const getCityById = (id) => {
    const cityEnArray = cities.filter((item) => item.value === id)[0]
    return cityEnArray.length > 0 ? cityEnArray[0] : { }
}