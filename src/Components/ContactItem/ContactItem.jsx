import React from "react";
import { Link } from "react-router";
import "./ContactItem.css";

const ContactItem = ({ contact }) => {
    return (
        <Link to={`/contact/${contact.id}/messages`} className="asd">
            <div className="asdf">
                <div className="asdfg">
                    <img src={contact.avatar} alt={contact.name} width={49} />
                </div>
                <div className="asdfh">
                    <div>
                        <span>{contact.name}</span>
                        <span>Last Connection: {contact.lastConnection}</span>
                    </div>
                    <div>
                        <span>Connection Status: {contact.connectionStatus}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ContactItem;



/* <img src={contact.avatar} alt={contact.name} width={100} />
            <h2>{contact.name}</h2>
            <span>Last Connection: {contact.lastConnection}</span>
            <span>Connection Status: {contact.connectionStatus}</span> */