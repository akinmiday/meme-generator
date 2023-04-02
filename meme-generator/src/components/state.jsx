import React from "react"

function State() {
    const [isImportant, setIsImportant] = React.useState("Yes")
    console.log(isImportant)


    function handleClick() {
        setIsImportant("No")
    }

    return (
        <div className="state">
            <h3>Is state Important to know?</h3>
            <div onClick={handleClick} className="state--value">
                <h1>{isImportant}</h1>
            </div>
        </div>
    )
}

export default State