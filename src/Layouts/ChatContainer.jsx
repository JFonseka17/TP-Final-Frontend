import { Outlet } from 'react-router'
import ContactSearch from '../Components/ContactSearch/ContactSearch'
import ContactScreen from '../Screens/ContactScreen/ContactScreen' 
import "./ChatContainer.css"

export default function ChatContainer({children}) {
    return (
        <div className="chat-container">
            {/* Columna izquierda (componentes fijos) */}
            <div className="left-panel">
                <ContactSearch />
                <ContactScreen />
            </div>
            {/* Columna derecha (contenido dinámico vía Outlet) */}
            <div className="right-panel">
                {children || <Outlet />} {/* Aquí irá ChatScreen cuando se seleccione un chat */}
            </div>
        </div>
    );
}