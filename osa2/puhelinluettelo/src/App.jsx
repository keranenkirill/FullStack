import { useState, useEffect } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'



const App = () => {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState('add a new person')
  const [newPhonenum, setNewPhonenum] = useState('add a new phone number')
  const [search, setSearch] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [goodMessage, setGoodMessage] = useState(null)

  const Notification = ({ message, className }) => {
    console.log('notification', message, className)
    if (message === null) {
      return null
    }

    return (
      <div className={className}>
        {message}
      </div>
    )
  }
  

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(initialNotes => {
        setPersons(initialNotes)
      })
  }, [])
  console.log('render', persons.length, 'notes')


  const addPerson = (event) => {
    event.preventDefault()

    if (ifExists(newPhonenum)) {
      alert(`Phonenumber ${newPhonenum} already exists in phonebook`)
      return
    }
    else if (newPerson.trim() === '' || newPhonenum.trim() === '') {
      alert('Name or phone number cannot be empty')
      return
    }
    else if (newPerson === 'add a new person' || newPhonenum === 'add a new phone number') {
      alert('Please enter a valid name and phone number')
      return
    }
    
    const personObject = {  //Lisää uusi henkilö puhelinluetteloo
      name: newPerson,
      num: newPhonenum,
    }

    personService
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewPerson('')
        setNewPhonenum('')
      })
      setGoodMessage(
              `Person added: ${newPerson}`
            )
            setTimeout(() => {
              setGoodMessage(null)
            }, 5000)
  }


  /*Tarkistaa onko sama puh nro jo luettelossa (tehtäväannossa oli nimen perusteella, keulin hieman)*/
  const ifExists = (num) => {
    console.log('ifexists', num)
    return persons.some(person => person.num === num)
  }

  // Delete person handler
  const handleDeletePerson = (id) => {
    if (window.confirm('Delete this person?')) {
      personService.deletePerson(id)
        .then(() => {
          console.log('Deleted person with id:', id)
          setPersons(prevPersons => prevPersons.filter(person => person.id !== id))
          setGoodMessage(
              `Person deleted`
            )
            setTimeout(() => {
              setGoodMessage(null)
            }, 5000)
        })
        .catch(error => {
          setErrorMessage(
              `Error with deleting person`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
        })
    }

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
      <Notification className="error" message={errorMessage} />
      <Notification className="good" message={goodMessage}/>
      <PersonForm 
        addPerson={addPerson} 
        newPerson={newPerson} 
        handleNameChange={handleNameChange}
        newPhonenum={newPhonenum}
        handleNumChange={handleNumChange}
      />
      <h2>Names</h2>
      <Filter search={search} handleSearchChange={handleSearchChange} />
      
      <ul>
        {filteredPersons().map(person =>
          <Person key={person.id} person={person} onDelete={handleDeletePerson} />
        )}
      </ul>
    </div>
  )

}

export default App