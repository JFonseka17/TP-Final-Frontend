import React, { useState } from "react";
import ContactList from "../../Components/ContactList/ContactList";
import { getContactList } from "../../Services/ContactServices";

const ContactScreen = () => {
    const contacts = getContactList()
    const [contactsState, setContactsState] = useState(contacts);

    return (
        <div>
            <h1>Contact List</h1>
            <ContactList contacts={contactsState} />
        </div>
    );
};

export default ContactScreen