import courses from './components/Course'

const App = () => {
  return (
    <div>
      {courses.map(course => (
        <Courses key={course.id} course={course} />
      ))}
    </div>
  )
}

const Courses = (props) => {
  return(
    <div>
      <Header name={props.course.name}/>
      <Content parts={props.course.parts}/>
    </div>
  )

}

const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}


const Content = (props) => {
  /*2.3*: kurssitiedot step8*/
  const total = props.parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      {props.parts.map(part => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
      <Total total={total} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}

/*2.2: kurssitiedot step7*/
const Total = (props) => {
  return (
    <div>
      <p>Total sum of submitted exercises is {props.total}</p>
    </div>
  )
}

export default App