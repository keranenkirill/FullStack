
const Person = ({ person, onDelete }) => {
  return (
    <li>
      {person.name}: {person.num}
      <button onClick={() => onDelete(person.id)}>delete</button>
    </li>
  )
}
export default Person