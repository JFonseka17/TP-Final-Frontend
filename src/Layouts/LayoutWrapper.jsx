import React from "react";
import { Outlet } from "react-router";
import SidebarScreen from "../Screens/SidebarScreen/SidebarScreen";
import "./LayoutWrapper.css"

function LayoutWrapper() {
    return (
        <div className="A">
            <SidebarScreen />
            <div className="content-area">
                <Outlet /> {/* Aquí se renderizará ChatScreen/EstadosScreen/CanalesScreen */}
            </div>
        </div>
    )
}

export default LayoutWrapper

{/* <div className="A">
            <header className="aa">
                <SidebarScreen />
            </header>
            <div className="ab">
                <ContactSearch />
                <ContactScreen />
            </div>
            <div className="ac">
                <Outlet />
            </div>
        </div> */}