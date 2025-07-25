import React from "react";
import { Link } from "react-router";
const ContactItem = ({ contact }) => {
    return (
        <Link to={`/contact/${contact.id}/messages`}>
            <h2>{contact.name}</h2>
            <p>Avatar: <img src={contact.avatar} alt={contact.name} width={100} /></p>
            <span>Last Connection: {contact.lastConnection}</span>
            <span>Connection Status: {contact.connectionStatus}</span>
        </Link>
    );
};

export default ContactItem; 