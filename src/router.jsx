import { createBrowserRouter, Navigate } from 'react-router'
import LayoutWrapper from './Layouts/LayoutWrapper'
import ChatScreen from './Screens/ChatScreen/ChatScreen'
import EstadosScreen from "./Screens/EstadosScreen/EstadosScreen"
import ChatContainer from './Layouts/ChatContainer'
import DownloadScreen from './Components/DownloadScreen/DownloadScreen'
import CanalesScreen from './Screens/CanalesScreen/CanalesScreen'


export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutWrapper />,
        children: [
            {
                index: true,
                element: (
                    <ChatContainer>
                        <DownloadScreen />
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
                element: <CanalesScreen />
            },
            {
                path: "comunidad",
                element: <CanalesScreen />
            },{
                path: "configuracion",
                element: <CanalesScreen />
            }
        ]
    }
])