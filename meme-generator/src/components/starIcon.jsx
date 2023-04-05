import React from "react";


function Star(props) {

    const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"
    return (
        <div>
            <img onClick={props.handleClick} className="star--img" src={`../src/assets/${starIcon}`} />
        </div>
    )
}

export default Star