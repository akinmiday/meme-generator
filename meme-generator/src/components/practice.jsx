import React from 'react';

function Practice() {

    const [things, setThings] = React.useState(["Thing 1", "Thing 2"])

    function addItem() {
        setThings(prevState => [...prevState, `Thing ${things.length + 1}`])
    }

    const thingsElements = things.map(thing => <h1 key={thing} >{thing}</h1>)

    return (
        <div>
            <button onClick={addItem} >Add Item</button>
            {thingsElements}
        </div>
    )
}
export default Practice