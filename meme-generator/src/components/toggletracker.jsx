import React from "react";
import Wintrack from "./wintrack";

function WindowTracker() {

    const [show, setShow] = React.useState(true)

    function toggle() {
        setShow(prevShow => !prevShow)
    }


    return (
        <div>
            <button onClick={toggle} >
                Toggle Window Tracker
            </button>
            {show && <Wintrack />}
        </div>
    )
}

export default WindowTracker