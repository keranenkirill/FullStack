import { useState } from 'react'


const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) =>(
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>

)

const Stats = (props) =>{
  const all = props.gval + props.nval + props.bval
  const avg = (props.gval*1 + props.bval*(-1) + props.nval*0)/(all)
  const pstv = props.gval/all

  if (props.gval + props.nval + props.bval === 0) {
    return <p>No feedback given</p>
  }
  return(
    <table>
      <tbody>
        <StatisticLine text="good" value ={props.gval} />
        <StatisticLine text="neutral" value ={props.nval} />
        <StatisticLine text="bad" value ={props.bval} />

        <StatisticLine text="All: " value ={all} />
        <StatisticLine text="Average: " value ={avg} />
        <StatisticLine text="Positive: " value ={pstv} />
      </tbody>
    </table>
  )
}


const App = () => {
  const [goodval, setGValue] = useState(0)
  const [neutval, setNValue] = useState(0)
  const [badval, setBValue] = useState(0)

  const setGoodValue = newValue => {
    console.log('good value now', newValue)
    setGValue(newValue)
  }

  const setNeutValue = newValue => {
    console.log('neut value now', newValue)
    setNValue(newValue)
  }
  const setBadValue = newValue => {
    console.log('bad value now', newValue)
    setBValue(newValue)
  }

  return (
    <div>
      <p>Give Feedback</p>
      <Button onClick={() => setGoodValue(goodval + 1)} text="G" />
      <Button onClick={() => setNeutValue(neutval + 1)} text="N" />
      <Button onClick={() => setBadValue(badval + 1)} text="B" />
      <p>Statistics:</p>
      <Stats gval={goodval} nval={neutval} bval={badval}/>
    </div>
  )
}

export default App