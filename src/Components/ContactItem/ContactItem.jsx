import React from "react";
import { Link } from "react-router";
import "./ContactItem.css";

const getLastMessage = (messages) => {
    if (!messages || messages.length === 0) return null;
    return messages[messages.length - 1];
};
const ContactItem = ({ contact }) => {

    const lastMessage = getLastMessage(contact.messages);

    return (
        <Link to={`/contact/${contact.id}/messages`} className="asd">
            <div className="asdf">
                <div className="asdfg">
                    <img src={contact.avatar} alt={contact.name} width={49} />
                </div>
                <div className="asdfh">
                    <div className="asdfh1">
                        <span className="asdfh11">{contact.name}</span>
                        <span className="asdfh12">{contact.lastConnection}</span>
                    </div>
                    <div>
                        <span>{lastMessage
                            ? `${lastMessage.emisor === 'YO' ? 'Tú: ' : ''}${lastMessage.texto}`
                            : 'No hay mensajes'}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ContactItem;