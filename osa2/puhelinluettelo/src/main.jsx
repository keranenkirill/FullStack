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
  },
  {
    id: 4,
    name: 'Kerttu Kettunen',
    num: '050-3334445'
  },
  {
    id: 5,
    name: 'Olavi Ojalan',
    num: '040-5556667'
  },
  {
    id: 6,
    name: 'Liisa Lahtinen',
    num: '050-7778889'
  },
  {
    id: 7,
    name: 'Pekka Pouta',
    num: '040-9990001'
  }


]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App persons={persons} />
)

const result = persons.map(person => person.id)
console.log(result)

