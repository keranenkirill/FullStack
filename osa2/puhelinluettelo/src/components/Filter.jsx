const Filter = ({ search, handleSearchChange }) => {
  return (
    <div>
      <h3>Search by name or phone number</h3>
      <input 
        value={search} 
        onChange={handleSearchChange}
        placeholder="Search names or phone numbers..."
      />
    </div>
  )
}
export default Filter