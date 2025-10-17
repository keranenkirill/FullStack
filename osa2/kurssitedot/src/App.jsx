const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

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
  console.log(props)
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}


const Content = (props) => {
  console.log(props)
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
  console.log(props)
  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}

/*2.2: kurssitiedot step7*/
const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Total sum of submitted exercises is {props.total}</p>
    </div>
  )
}

export default App