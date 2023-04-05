import React from "react"
import memesdata from "../memesdata"


function Form() {

    // const [memeImage, setMemeImage] = React.useState("")
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesdata)


    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))


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
            <img className="meme--image" src={meme.randomImage} />
        </main>
    )
}

export default Form