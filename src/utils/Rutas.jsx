import React from "react";
import Login from "../routes/Login";
import Operacion from "../routes/Operacion";
import Asistencia from "../routes/Asistencia";
import MisDatos from "../routes/MisDatos";
import Consultas from "../routes/Consultas";
import GenerarConsultas from "../routes/GenerarConsultas";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Route, Routes, Outlet } from "react-router-dom";

const Rutas = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />

        {isAuthenticated && (
          <>
           
            <Route path="operacion" element={<Operacion />} />
            <Route path="consultas" element={<Consultas />} />
            <Route path="generar" element={<GenerarConsultas />} />
            <Route path="asistencia" element={<Asistencia />} />
            <Route path="misDatos" element={<MisDatos />} />
          </>
        )}
      </Routes>
    </div>
  );
};

export default Rutas;