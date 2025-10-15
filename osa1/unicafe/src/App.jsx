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

const All = (props) =>(
  <div>
    All: {props.gval + props.bval + props.nval}
  </div>
)

const Average = (props) =>(
  <div>
    Average: {(props.gval*1 + props.bval*(-1) + props.nval*0)/(props.gval + props.bval + props.nval)}
  </div>
)

const Positive = (props) =>(
  <div>
    Positive: {(props.gval)/(props.gval + props.bval + props.nval)}
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
      <All gval={goodval} nval={neutval} bval={badval}/>
      <Average gval={goodval} nval={neutval} bval={badval}/>
      <Positive gval={goodval} nval={neutval} bval={badval}/>
    </div>
  )
}

export default App
