import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import "./ContactList.css";
const ContactList = ({ contacts }) => {
    return (
        <div className="qwe">
            {contacts.map((contact) => (
                <ContactItem key={contact.id} contact={contact} />
            ))}
        </div>
    );
};

export default ContactList;