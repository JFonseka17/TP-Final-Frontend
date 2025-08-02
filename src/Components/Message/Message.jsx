import React, { useState } from 'react'
import './Message.css'

const Message = ({ emisor, hora, id, texto, status, deleteMessageById }) => {

	const [message_selected, setMessageSelected] = useState(false)

	const currentUser = "Yo";

	const handleChangeMessageSelected = (e) => {
		e.preventDefault()
		setMessageSelected(true)
	}

	const isOwnMessage = emisor === currentUser	
	
	return (
		<div className={`message-container ${isOwnMessage ? 'own-message' : 'other-message'}`} onContextMenu={handleChangeMessageSelected}>
			<div className="message-bubble">
				<p className="message-text">
					{texto}
				</p>
				<div className="message-footer">
					<span className="message-time">
						{hora}
					</span>
				</div>
			</div>
			{
			message_selected
			&& 
			(
				<button className="delete-btn" onClick={() => { deleteMessageById(id) }}>
					Eliminar
				</button>
			)
			}
		</div>
	)
}
export default Message