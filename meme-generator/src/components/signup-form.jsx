import React from "react";

function Signup() {


    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        passwordConfirm: "",
        joinedNewsLetter: false
    })


    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (formData.password === formData.passwordConfirm) {
            console.log("Successfully signed up")
        } else {
            console.log("passwords do not match")
            return
        }

        if (formData.joinedNewsLetter === true) {
            console.log("Thanks for signing up for our news letter")
        }
    }



    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <input type="email"
                    name="email"
                    placeholder="email address"
                    className="form---input"
                    onChange={handleChange}
                    value={formData.email} />


                <input type="password"
                    name="password"
                    placeholder="password"
                    className="form---input"
                    onChange={handleChange}
                    value={formData.password} />

                <input type="password"
                    name="passwordConfirm"
                    placeholder="confirm password"
                    className="form---input"
                    onChange={handleChange}
                    value={formData.passwordConfirm} />

                <div className="form--marketing">
                    <input type="checkbox"
                        id="okayToEmail"
                        name="joinedNewsLetter"
                        onChange={handleChange}
                        checked={formData.joinedNewsLetter} />

                    <label htmlFor="okayToEmail" >i want to join news letter</label>
                </div>

                <button className="form--submit">Sign-up</button>
            </form>

        </div>
    )
}

export default Signup