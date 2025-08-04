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
        <Link to={`/chats/${contact.id}`} className="contact-item-container">
            <div className="contact-item-content">
                <div className="contact-item-avatar">
                    <img src={contact.avatar} alt={contact.name} width={49} />
                </div>
                <div className="contact-item-target">
                    <div className="contact-item-info">
                        <span className="contact-item-name">{contact.name}</span>
                        <span className="contact-item-last">{contact.lastConnection}</span>
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