import ReactDOM from 'react-dom/client'
import App from './App'

const persons = [
  {
    id: 1,
    name: 'Matti Meikäläinen',
    num: '040-1234567'
  },
  {
    id: 2,
    name: 'Salla Salminen',
    num: '050-7654321'
  },
  {
    id: 3,
    name: 'Jaakkomatti Tuhkimo',
    num: '040-1112223'
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App persons={persons} />
)

const result = persons.map(person => person.id)
console.log(result)

