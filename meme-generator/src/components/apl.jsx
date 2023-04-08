import React from "react";

function Apl() {

    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)

    console.log("rendered")



    // side effects

    React.useEffect(function () {
        fetch(`https:swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])


    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h2>the count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)} >Get next character</button>
        </div>
    )
}

export default Apl