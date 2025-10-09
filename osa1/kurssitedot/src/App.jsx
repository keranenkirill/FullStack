const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    { name: 'Fundamentals of React',    exercises: 10 },
    { name: 'Using props to pass data', exercises: 7  },
    { name: 'State of a component',     exercises: 14 }
  ];

  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises;


  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={total} />
    </div>
  );
};
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