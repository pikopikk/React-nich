import { useState } from "react";

export default function Counter(){
  let [counter, setCounter] = useState(0)

  function handleClick(){
    setCounter((c)=>c + 1)
    setCounter((c)=>c + 1)
    setCounter((c)=>c + 1)
    console.log(counter);
  }

  return (
    <div>
      <div>
        <button onClick={handleClick}>
          Increment
        </button>
      </div>
      <div>
        <h1>
          counter: {counter}
        </h1>
      </div>
    </div>
  )
}