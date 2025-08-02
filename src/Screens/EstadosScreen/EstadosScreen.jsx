import React, { useState } from 'react';
import './EstadosScreen.css'; // Asegúrate de crear este archivo CSS

export default function EstadosScreen() {
    const [estados, setEstados] = useState([
        {
            id: 1,
            user: "Maria",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            timestamp: "Hace 2 horas",
            viewed: false
        },
        {
            id: 2,
            user: "Juan",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            timestamp: "Hace 1 hora",
            viewed: true
        },
        {
            id: 3,
            user: "Ana",
            avatar: "https://randomuser.me/api/portraits/women/65.jpg",
            timestamp: "Ahora",
            viewed: false
        }
    ]);

    return (
        <div className="estados-screen">
            <h2 className="estados-title">Estados</h2>
            
            <div className="estados-container">
                {estados.map(estado => (
                    <div 
                        key={estado.id} 
                        className={`estado-item ${estado.viewed ? 'viewed' : 'new'}`}
                    >
                        <div className="avatar-container">
                            <img 
                                src={estado.avatar} 
                                alt={estado.user} 
                                className="estado-avatar"
                            />
                            {!estado.viewed && <div className="unread-badge"></div>}
                        </div>
                        <div className="estado-info">
                            <span className="user-name">{estado.user}</span>
                            <span className="timestamp">{estado.timestamp}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}