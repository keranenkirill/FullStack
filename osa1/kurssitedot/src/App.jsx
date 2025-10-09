const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const total = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises;


  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </div>
  )
}

const Header=(props)=>{
  console.log(props)
    return (
      <div>
        <p>Course: {props.course}</p>
      </div>
    )
}


const Content=(props)=>{
  console.log(props)
    return (
      <div>
        {props.parts.map(p => (
          <Part key={p.name} name={p.name} exercises={p.exercises} />
        ))}
      </div>
    )
}

const Part=(props)=>{
  console.log(props)
  return(
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}

const Total=(props)=>{
  console.log(props)
    return (
      <div>
        <p>Total sum of submitted exercises is {props.total}</p>
      </div>
    )
}



export default App