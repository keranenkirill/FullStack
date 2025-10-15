import { useState } from 'react'


const Display = props => (
  <div>
    {props.text} {props.val}
  </div>
)
const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

/* täs vois kyl toteuttaa statsit paremmin*/
const Stats = (props) =>(
  <div>
    <p>All: {props.gval + props.bval + props.nval}</p>
    <p>Average: {(props.gval*1 + props.bval*(-1) + props.nval*0)/(props.gval + props.bval + props.nval)}</p>
    <p>Positive: {props.gval/(props.gval + props.bval + props.nval)} </p>
  </div>
)


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
      <Display text="Good" val={goodval} />
      <Display text="Neutral" val={neutval} />
      <Display text="Bad" val={badval} />
      <p></p>
      <Stats gval={goodval} nval={neutval} bval={badval}/>
    </div>
  )
}

export default App
