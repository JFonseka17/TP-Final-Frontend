import { createBrowserRouter, Navigate } from 'react-router'
import LayoutWrapper from './Layouts/LayoutWrapper'
import ChatScreen from './Screens/ChatScreen/ChatScreen'
import EstadosScreen from "./Screens/EstadosScreen/EstadosScreen"
import ChatContainer from './Layouts/ChatContainer'
import DownloadPromo from './Components/DownloadPromo/DownloadPromo'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutWrapper />, // Envolvemos tu Layout
        children: [
            {
                index: true,
                element: (
                    <ChatContainer>
                        <DownloadPromo/>
                    </ChatContainer>
                )
            },
            {
                path: "chats",
                element: <ChatContainer/>,
                children: [
                    {
                        path: ":contact_id",
                        element: <ChatScreen />
                    }
                ]   
            },
            {
                path: "estados",
                element: <EstadosScreen />
            },
            {
                path: "canales",
                element: <EstadosScreen />
            },
            {
                path: "comunidades",
                element: <EstadosScreen />
            },
        ]
    }
])