import React from "react"

const CounterContext = React.createContext(null)

const CounterContextProvider = (props) => {
  const [value, setState] = React.useState(0)
  const minus = () => setState(value - 1)
  const plus = () => setState(value + 1)
  const context = { value, minus, plus }

  return (
    <CounterContext.Provider value={context}>
      {props.children}
    </CounterContext.Provider>
  )
}

const useCounterContext = () => {
  return React.useContext(CounterContext)
}

const MinusButton = () => {
  const context = useCounterContext()

  return <button onClick={context.minus}>-</button>
}
const PlusButton = () => {
  const context = useCounterContext()

  return <button onClick={context.plus}>+</button> 
}
const Viewer = () => {
  const context = useCounterContext()

  return <span>{context.value}</span>
}

const Counter = () => {
  return (
    <CounterContextProvider>
      <MinusButton />
      <Viewer />
      <PlusButton />
    </CounterContextProvider>
  )
}

const Home = () => {
  return <Counter />
}

export default Home