// src/components/CountryDetails.jsx
const CountryDetails = ({ country }) => {
  const name = country.name?.common ?? 'Unknown'
  const capital = Array.isArray(country.capital) ? country.capital.join(', ') : country.capital
  const area = country.area
  const languages = country.languages ? Object.values(country.languages) : []
  const flagSrc = country.flags?.svg || country.flags?.png
  const flagAlt = country.flags?.alt || `${name} flag`

  return (
    <div>
      <h2>{name}</h2>

      <div>capital: {capital || '—'}</div>
      <div>area: {area} km²</div>

      <h3>languages:</h3>
      <ul>
        {languages.map(lang => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>

      {flagSrc && (
        <img
          src={flagSrc}
          alt={flagAlt}
          style={{ maxWidth: 240, height: 'auto', borderRadius: 8 }}
        />
      )}
    </div>
  )
}

export default CountryDetails
