const PersonForm = ({ addPerson, newPerson, handleNameChange, newPhonenum, handleNumChange }) => {
  return (
    <form onSubmit={addPerson}>
      <input value={newPerson} onChange={handleNameChange}/>
      <input value={newPhonenum} onChange={handleNumChange} /> 
      <button type="submit">add</button>
    </form>  
   )
}
export default PersonForm



