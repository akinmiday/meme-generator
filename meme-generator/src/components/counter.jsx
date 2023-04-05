import React from "react"
import Count from "./count"
function Counter() {
    const [count, setCount] = React.useState(0)

    function add() {
        setCount(prevCount => prevCount + 1)
    }

    function sub() {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <div>
            <button onClick={sub} >-</button>
            <Count number={count} />
            <button onClick={add}>+</button>
        </div>
    )
}
export default Counter