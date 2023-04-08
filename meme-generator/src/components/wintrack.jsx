import React from "react";

export default function Wintrack() {

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {
        function watchWidth() {
            console.log("setting up")
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", watchWidth)

        // clean up use effect

        return function () {
            console.log("cleaning up")
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

    return (
        <h1>Window width: {windowWidth}</h1>
    )
}
