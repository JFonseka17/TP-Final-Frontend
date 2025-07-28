import React, { dispatch,useEffect, useState } from 'react'
import MessagesList from '../../Components/MessagesList/MessagesList'
import Message from '../../Components/Message/Message'
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm'
import { useParams } from 'react-router'
import { getContactById } from '../../Services/ContactServices'


const ChatScreen = () => {

	const { contact_id } = useParams()

	const contact_selected = getContactById(contact_id)
	const [messages, setMessages] = useState(contact_selected.messages)

	
	useEffect(() => {
		const contact_selected = getContactById(contact_id)
		setMessages(contact_selected.messages || []);
		}, [contact_id]);
	




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
		emisor: 'YO',
		hora: '11:18',
		texto: text,
		status: 'no-visto',
		id: messages.length + 1
	}

	const cloned_messages_list = [...messages]

	cloned_messages_list.push(new_message)

	setMessages(cloned_messages_list)
}

const deleteAllMessages = () => {
	setMessages([])
}

return (
	<div>
		<h1>Mensajes:</h1>
		{
			messages.length > 0
			&&
			<button onClick={deleteAllMessages}>Borrar todos los mensajes</button>
		}
		<MessagesList messages={messages} deleteMessageById={deleteMessageById} />
		<NewMessageForm addNewMessage={addNewMessage} />
	</div>
)
}

export default ChatScreen