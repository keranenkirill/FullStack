import { useState } from 'react'
import CountryDetails from './CountryDetails'

const Countries = ({ countries }) => {
  const [selectedCountry, setSelectedCountry] = useState(null)

  if (countries.length === 0) return null

  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>
  }

  // Jos vain yksi osuma → näytä heti tiedot
  if (countries.length === 1) {
    return <CountryDetails country={countries[0]} />
  }

  // Jos 2–10 osumaa → listaa nimet ja “show”-napit
  return (
    <div>
      <ul>
        {countries.map(country => (
          <li key={country.cca3}>
            {country.name.common}{' '}
            <button onClick={() => setSelectedCountry(country)}>show</button>
          </li>
        ))}
      </ul>

      {/* Näytetään klikatun maan tiedot napin alla */}
      {selectedCountry && <CountryDetails country={selectedCountry} />}
    </div>
  )
}

export default Countries
