import React, { useState } from "react";
import "./Contact.scss";
import { send } from "emailjs-com";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (emailSent) {
            return;
        }
        if (name && isValidEmail(email) && message) {
            // TODO - send mail

            const formData = {
                fromName: name,
                fromEmail: email,
                message: message,
            };

            send(
                "service_gk1xtqk",
                "template_yrt3bbr",
                formData,
                "5yop65zQLl8k3ZyGw"
            ).then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );

            setName("");
            setEmail("");
            setMessage("");
            setEmailSent(true);
            setTimeout(() => {
                setEmailSent(false);
            }, 10000);
        } else {
            alert("Please fill in all fields.");
        }
    };

    const isValidEmail = (email) => {
        const regex =
            // eslint-disable-next-line no-useless-escape
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };

    return (
        <div id="contact-form">
            <input
                id="top-input"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button onClick={submit}>
                {emailSent ? "Thank You!" : "Send Message"}
            </button>
        </div>
    );
};

export default Contact;
