import React from "react";
import { Outlet } from "react-router";
import SidebarScreen from "../Screens/SidebarScreen/SidebarScreen";
import "./LayoutWrapper.css"

function LayoutWrapper() {
    return (
        <div className="layout-wrapper">
            <SidebarScreen />
            <div className="layout-content">
                <Outlet /> {/* Aquí se renderizará ChatScreen/EstadosScreen/CanalesScreen */}
            </div>
        </div>
    )
}

export default LayoutWrapper