import React, { useEffect, useState } from 'react'
import MessagesList from '../../Components/MessagesList/MessagesList'
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm'
import { useParams } from 'react-router'
import { getContactById } from '../../Services/ContactServices'
import './ChatScreen.css'
import ContactHeader from '../../Components/ContactHeader/ContactHeader'

const ChatScreen = () => {
	const { contact_id } = useParams()

	const [messages, setMessages] = useState([])
	const [contact, setContact] = useState(null)

	useEffect(() => {
        const contactData = getContactById(contact_id)
        if (contactData) {
            setContact(contactData)
            setMessages(contactData.messages || [])
        }
    }, [contact_id])

	const deleteMessageById = (message_id) => {

		const new_message_list = messages.filter(
			(message) => {
				return message.id !== message_id
			}
		)
		setMessages(new_message_list)
	}

	const addNewMessage = (text) => {

		const new_message = {
			emisor: 'Yo',
			hora: '11:18',
			texto: text,
			status: 'no-visto',
			id: messages.length + 1
		}

		const cloned_messages_list = [...messages]

		cloned_messages_list.push(new_message)

		setMessages(cloned_messages_list)
	}


	return (
		<div className='chat-screen'>
			{contact && <ContactHeader contact={contact} />}
			<div className='messages-list-content'>
				<MessagesList messages={messages} deleteMessageById={deleteMessageById} />
			</div>
			<footer className='footer'>
				<NewMessageForm addNewMessage={addNewMessage} />
			</footer>
		</div>
	)
}

export default ChatScreen