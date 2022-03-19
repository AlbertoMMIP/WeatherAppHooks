const cities = [
  { city: 'México', country: 'Ciudad de México', countryCode: 'MX' },
  { city: 'España', country: 'Madrid', countryCode: 'ES' },
  { city: 'Argentina', country: 'Buenos Aires', countryCode: 'AR' },
  { city: 'Colombia', country: 'Bogota', countryCode: 'CO' }
]

export const getCities = () => (cities)

export const getCountryName = (countryCode) => cities.filter(city => city.countryCode === countryCode)[0].country