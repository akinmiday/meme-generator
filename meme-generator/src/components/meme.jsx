import React from "react"
import memesdata from "../memesdata"


function Form() {

    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() {
        const memesArray = memesdata.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)


    }

    return (
        <main>
            <div className="form">
                <input
                    placeholder="Top text"
                    type="text"
                    className="form--input"
                />
                <input
                    placeholder="Bottom text"
                    type="text"
                    className="form--input"
                />
                <button onClick={getMemeImage} className="form--btn">Get a new meme image  🖼
                </button>
            </div>
            <img className="meme--image" src={memeImage} />
        </main>
    )
}

export default Form