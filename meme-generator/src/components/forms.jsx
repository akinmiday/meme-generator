import React from "react";

function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            comment: "",
            isFriendly: true,
            employment: ""
        })

    console.log(formData.comment)

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value

            }
        })
    }


    return (
        <form>
            <input type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />

            <input type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />

            <input type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />

            <textarea
                placeholder="enter text here"
                onChange={handleChange}
                name="comment"
                value={formData.comment} />

            <input
                type="checkbox"
                id="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            />
            <label htmlFor="isFriendly" >Are you friendly ?</label>
            <br />

            <fieldset>
                <legend>Current employment status</legend>
                <input
                    type="radio"
                    id="unemployed"
                    name="employement"
                    value="unemployed"
                    onChange={handleChange}
                />
                <label htmlFor="unemployed" >Unemployed</label>
                <br />

                <input
                    type="radio"
                    id="part-time"
                    name="employement"
                    value="part-time"
                    onChange={handleChange}
                />
                <label htmlFor="part-time" >Part time</label>
                <br />

                <input
                    type="radio"
                    id="full-time"
                    name="employement"
                    value="full-time"
                    onChange={handleChange}
                />
                <label htmlFor="full-time" >full-time</label>
                <br />
            </fieldset>
        </form>
    )
}

export default Form