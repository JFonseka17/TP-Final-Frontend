import React from 'react';
import './DownloadPromo.css';

const DownloadPromo = () => {
    return (
        <div className="download-promo">
            <div className="promo-content">
                <h2>¡WhatsApp Web</h2>
                <p>Envía y recibe mensajes sin necesidad de tener tu teléfono conectado</p>
                <p>Usa WhatsApp en hasta cuatro dispositivos vinculados y un teléfono a la vez</p>

                <div className="download-options">
                    <button className="download-btn">
                        <span>Descargar para Windows</span>
                    </button>
                    <a href="#" className="learn-more">Más información</a>
                </div>
            </div>
        </div>
    );
};

export default DownloadPromo;