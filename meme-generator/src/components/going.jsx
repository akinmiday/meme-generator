import React from "react"

function Going() {

    const [isGoingOut, setIsGoingOut] = React.useState(true)

    function changeMind() {
        setIsGoingOut(prevState => !prevState)
    }

    return (
        <div>
            <h3>Do i feel like going out tonight?</h3>
            <div onClick={changeMind} >
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
            </div>
        </div>
    )
}

export default Going