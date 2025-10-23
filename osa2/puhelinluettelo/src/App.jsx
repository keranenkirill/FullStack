import { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'
import Filter from './components/Filter'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState('add a new person')
  const [newPhonenum, setNewPhonenum] = useState('add a new phone number')
  const [search, setSearch] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'notes')


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

    axios
    .post('http://localhost:3001/persons', personObject)
    .then(response => {
      console.log(response)
    })
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

  const filteredPersons = () => {
    return persons.filter(person => 
      person.name.toLowerCase().startsWith(search.toLowerCase()) ||
      person.num.startsWith(search)
    )
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
      <Filter search={search} handleSearchChange={handleSearchChange} />
      
      <ul>
        {filteredPersons().map(person =>
          <Person key={person.id} person={person} />
        )}
      </ul>
    </div>
  )

}

export default App