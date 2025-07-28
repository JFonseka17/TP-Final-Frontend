import React, { useState } from "react";
import ContactList from "../../Components/ContactList/ContactList";
import { getContactList } from "../../Services/ContactServices";
import "./ContactScreen.css"

const ContactScreen = () => {
    const contacts = getContactList()
    const [contactsState, setContactsState] = useState(contacts);
    
    return (
        <div  className="backgroundContact" >
            <h1>Contact List</h1>
            <ContactList contacts={contactsState} />
            
        </div>
    );
};

export default ContactScreen