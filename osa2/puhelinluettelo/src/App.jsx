import { useState } from 'react'
import Person from './components/Person'



const App = (props) => {
  const [persons, setPersons] = useState(props.persons)
  const [newPerson, setNewPerson] = useState('add a new person')
  const [newPhonenum, setNewPhonenum] = useState('add a new phone number')
  const [search, setSearch] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    if (ifExists(newPhonenum)) {
      alert(`Phonenumber ${newPhonenum} already exists in phonebook`)
      return
    }
    
    const personObject = {  //Lisää uusi henkilö puhelinluetteloo
      id: persons.length + 1,
      name: newPerson,
      num: newPhonenum,
    }
    setPersons(persons.concat(personObject))
    setNewPerson('add a new person')
    setNewPhonenum('add a new phone number')
  }
  /*Tarkistaa onko sama puh nro jo luettelossa (tehtäväannossa oli nimen perusteella, keulin hieman)*/
  const ifExists = (num) => {
    console.log('ifexists', num)
    return persons.some(person => person.num === num)
  }


  const handleNameChange = (event) => {
    /*console.log(event.target.value)*/
    setNewPerson(event.target.value)
  }
  const handleNumChange = (event) => {
    /*console.log(event.target.value)*/
    setNewPhonenum(event.target.value)
  }
  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }
  

  /*henkilön puh nron lisäys tehty*/
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <input value={newPerson} onChange={handleNameChange}/>
        <input value={newPhonenum} onChange={handleNumChange} /> 
        <button type="submit">add</button>
      </form>
      <h2>Names</h2>
      <div>
        <h3>Search by name or phone number</h3>
        <input 
          value={search} 
          onChange={handleSearchChange}
          placeholder="Search names or phone numbers..."
        />
      </div>
      
      <ul>
        {persons
          .filter(person => 
            person.name.toLowerCase().startsWith(search.toLowerCase()) ||
            person.num.startsWith(search)
          )
          .map(person =>
            <Person key={person.id} person={person} />
          )}
      </ul>
    </div>
  )

}

export default App