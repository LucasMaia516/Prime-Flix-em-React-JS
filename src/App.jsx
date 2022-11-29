/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import RoutesApp from "./routes";
import { ToastContainer } from "react-toastify"  // Toastify é um alerta personalizado. Primeiro importa ele dps de instalar em seu projeto usando o npm install react-toastify

import 'react-toastify/dist/ReactToastify.css'; // Depois importa o css dele, que se pega dentro do próprio site


export default (props) => {
    return (

        <>

        <ToastContainer autoClose={3000}/> {/* Estou importando ele, passando que em 3 segundo, o alerta se fecha sozinho */}
        <RoutesApp />

        </>

    )
}