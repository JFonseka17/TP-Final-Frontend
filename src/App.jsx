import React, { useState } from "react"
import { Route, Routes, Outlet } from 'react-router'
import ChatScreen from './Screens/ChatScreen/ChatScreen'
import ContactScreen from "./Screens/ContactScreen/ContactScreen"
import "./App.css"

const Layout = () => {
	return (
		<div className="A">
			<header className="aa"></header>

			{/* Columna 1: Lista de contactos (SIEMPRE visible) */}
			<div className="ab">
				<ContactScreen />
			</div>

			{/* Columna 2: Área dinámica (aquí entra ChatScreen) */}
			<div className="ac">
				<Outlet /> {/* Esto se reemplazará por la ruta hija */}
				<img src='../public/fondo_espejado.jpg' alt="" />
			</div>
		</div>
	);
};

const App = () => {
	return (
		<Routes>
			{/* Ruta principal con Layout fijo */}
			<Route path="/" element={<Layout />}>
				{/* Ruta hija: se renderiza en el <Outlet /> del Layout */}
				<Route
					path="contact/:contact_id/messages"
					element={<ChatScreen />}
				/>
			</Route>
		</Routes>
	);
};

export default App;












/* const App = () => {

	return (
			<div className="A">
				<header className="aa">
				</header>
				<div className="ab">
					<Routes>
						<Route
							path="/"
							element={<ContactScreen/>}
						/>
					</Routes>
				</div>
				<div className="ac">
					<img src="Fondo TP.jpg" alt="" />
					<Routes>
						<Route
						path="/contact/:contact_id/messages"
						element={<ChatScreen/>}
						/>
					</Routes>
				</div>
				
			</div>
	)
}

export default App */