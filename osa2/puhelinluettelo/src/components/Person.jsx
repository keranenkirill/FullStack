const Person = ({ person }) => {
   console.log(person)
  return <li>{person.name}: {person.num}</li>
}

export default Person