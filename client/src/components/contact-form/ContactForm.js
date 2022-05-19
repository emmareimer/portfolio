// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address

// EmailJS - email contact submissions to myself

import React, {useState} from "react";

const ContactForm = () => {

    const [formData, setFormData] = useState({});

    // const handleFormChange = (e) => {
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.name
    //     })
    // }

    const sendContact = (e) => {
        e.preventDefault();
        console.log("submitting form")
    }

    return (
        <React.Fragment id="contact-me-form">
            <h1 id="contact-me">Slide in my DM's</h1>
                <form className="form" style={{display: 'block'}} onSubmit={sendContact}>
                    <input name="formName" type="text" placeholder="Full Name" value={formData.formName} />
                    <input name="formEmail" type="email" placeholder="Email Address" value={formData.formEmail} />
                    <input name="formMessage" type="text" placeholder="Message" />
                    <button type="submit" onClick={sendContact}>
                        Send it!
                    </button>
                </form>
        </React.Fragment>
    )
}

export default ContactForm;