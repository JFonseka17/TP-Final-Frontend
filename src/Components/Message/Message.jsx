import React, { useState } from 'react'

const Message = ({emisor, hora, id, texto, status, deleteMessageById}) => {
	
	const [message_selected, setMessageSelected] = useState (false)

	const handleChangeMessageSelected = (e) => {
		e.preventDefault()
		setMessageSelected(true)
	}
	return (
		<div onContextMenu={handleChangeMessageSelected}>
			<p>{texto}</p>
			<span>{hora}</span>
			{
				message_selected && <button onClick={() => {deleteMessageById(id)}}>Eliminar</button>
			}
		</div>
	)
}
export default Message