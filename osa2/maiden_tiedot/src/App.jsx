import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState('')

  // Haetaan kaikki maat kerran sovelluksen käynnistyessä
  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(res => setCountries(res.data))
      .catch(err => {
        console.error('Countries fetch failed:', err)
      })
  }, [])
  



  const shownCountries = 
    query.trim() === ''
      ? []
      : countries.filter(country =>
          country.name.common.toLowerCase().includes(query.toLowerCase())
        )

  return (
    <div>
      <Filter value={query} onChange={(e) => setQuery(e.target.value)} />
      <Countries countries={shownCountries} />
    </div>
  )
}

export default App
