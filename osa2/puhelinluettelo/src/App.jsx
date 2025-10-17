import { useState } from 'react'
import Person from './components/Person'



const App = (props) => {
  const [persons, setPersons] = useState(props.persons)
  const [newPerson, setNewPerson] = useState('add a new person')
  const [newPhonenum, setNewPhonenum] = useState('add a new phone number')

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
      <ul>
        {persons.map(person =>
          <Person key={person.id} person={person} />
        )}
      </ul>
    </div>
  )

}

export default App