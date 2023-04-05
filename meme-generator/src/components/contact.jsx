import React from "react"
import Star from "./starIcon"

function Contact() {

    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorites: false
    })


    function toggleFavorite() {
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavorites: !prevContact.isFavorites
            }
        })
    }

    return (
        <div>
            <Star isFilled={contact.isFavorites} handleClick={toggleFavorite} />
            <h2>
                {contact.firstName} {contact.lastName}
            </h2>
            <h4>
                {contact.phone}
            </h4>
            <h5>
                {contact.email}
            </h5>
        </div>
    )
}

export default Contact