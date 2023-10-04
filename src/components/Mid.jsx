import React from "react";
import { useState } from "react";
import { LoginButton } from "./LoginButton";

import iconPreguntasfrecuentes from "../images/info.png";
import iconManualUsuario from "../images/manual.png";
import iconContactenos from "../images/contact.png";
import iconReportarError from "../images/report.png";
import camara from "../images/camara.png";
import { Navigate } from "react-router-dom";

export default function Mid(props) {
  //Codigo de 'mostrar password'

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //Termina el codigo de 'mostrar password'//

  //Codigo de Consultas: apartado de tiempo//

  const numero = "12:30";

  return (
    <div className="body">
      {props.formularioLogin && (
        <div className="contenedorLogin">
          <h2 className="tituloLogin">
            PARA ENTRAR Y VER TODAS LAS FUNCIONALIDADES INICIE SESION DANDO
            CLICK EN EL BOTON
          </h2>

          <div className="loginButton">
            <LoginButton />
          </div>
        </div>
      )}

      {props.formularioRegistro && (
        <div className="contenedorRegistro">
          <h2 className="tituloRegistro">REGISTRO</h2>

          <div className="registro">
            <h3 className="subtituloRegistro">NOMBRE COMPLETO</h3>
            <input className="inputRegistro"></input>

            <h3 className="subtituloRegistro">LIBRETA MILITAR</h3>
            <input
              id="libretaMilitar"
              className="inputRegistro"
              type="number"
            ></input>

            <h3 className="subtituloRegistro">CONTRASEÑA</h3>
            <input
              className="inputRegistro"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <h3 className="subtituloRegistro">CONFIRMAR CONTRASEÑA</h3>
            <input
              className="inputRegistro"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button
              className="botonShow"
              type="button"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Ocultar" : "Mostrar"}
            </button>
          </div>

          <div>
            <button className="botonRegistro">REGISTRARSE</button>
          </div>
        </div>
      )}

      {props.asistencia && (
        <div className="contenedorAsistencia">
          <h2 className="tituloAsistencia">¿Necesita Ayuda?</h2>

          <div className="contenedorModulosAsistencia">
            <div className="modulo1Asistencia">
              <div className="contenedorModulo1">
                <div className="descripcionModulo1">
                  <h3 className="subtituloAsistencia">Preguntas frecuentes</h3>
                  <p className="parrafoAsistencia">
                    Encuentre todo lo relacionado a posibles fallos con la
                    aplicacion dando click
                    <a className="anclaAsistencia" href="#">
                      aqui.
                    </a>
                  </p>
                </div>

                <img className="imgModulo1" src={iconPreguntasfrecuentes} />
              </div>

              <div className="contenedorModulo1">
                <div className="descripcionModulo1">
                  <h3 className="subtituloAsistencia">Manual de Usuario</h3>
                  <p className="parrafoAsistencia">
                    Encuentre el manual de usuario de guia para el uso de la
                    aplicacion dando click
                    <a className="anclaAsistencia" href="#">
                      aqui.
                    </a>
                  </p>
                </div>

                <img className="imgModulo1" src={iconManualUsuario} />
              </div>
            </div>

            <div className="modulo2Asistencia">
              <div className="contenedorModulo2">
                <div className="descripcionModulo2">
                  <h3 className="subtituloAsistencia">Contactenos</h3>
                  <p className="parrafoAsistencia">
                    Contactenos a nuestra linea nacional gratuita abierta las
                    24H
                    <a className="anclaAsistencia" href="#">
                      aqui.
                    </a>
                  </p>
                </div>

                <img className="imgModulo2" src={iconContactenos} />
              </div>

              <div className="contenedorModulo2">
                <div className="descripcionModulo2">
                  <h3 className="subtituloAsistencia">Reportar un Error</h3>
                  <p className="parrafoAsistencia">
                    Para reportar un error encontrado de click{" "}
                    <a className="anclaAsistencia" href="#">
                      aqui
                    </a>{" "}
                    y siga las instrucciones.
                  </p>
                </div>

                <img className="imgModulo2" src={iconReportarError} />
              </div>
            </div>
          </div>
        </div>
      )}

      {props.misDatos && (
        <div className="contenedorMisDatos">
          <h2 className="tituloMisDatos">MIS DATOS</h2>

          <div className="datosUsuario">
            <div className="informacionTextualUsuario">
              <label className="labelDatosUsuario" for="nombre">
                Nombre
              </label>
              <input
                className="inputDatosUsuario"
                id="nombre"
                type="text"
              ></input>

              <label className="labelDatosUsuario" for="nombre">
                Correo Electronico
              </label>
              <input
                className="inputDatosUsuario"
                id="nombre"
                type="emaul"
              ></input>

              <label className="labelDatosUsuario" for="nombre">
                Celular
              </label>
              <input
                className="inputDatosUsuario"
                id="nombre"
                type="number"
              ></input>

              <label className="labelDatosUsuario" for="nombre">
                Domicilio
              </label>
              <input
                className="inputDatosUsuario"
                id="nombre"
                type="text"
              ></input>

              <label className="labelDatosUsuario" for="nombre">
                Fecha de Nacimiento
              </label>
              <input
                className="inputDatosUsuario"
                id="nombre"
                type="date"
              ></input>

              <label className="labelDatosUsuario" for="nombre">
                Libreta Militar
              </label>
              <input
                className="inputDatosUsuario"
                id="nombre"
                type="text"
              ></input>

              <label className="labelDatosUsuario" for="nombre">
                Cedula de ciudadania
              </label>
              <input
                className="inputDatosUsuario"
                id="nombre"
                type="text"
              ></input>
            </div>

            <div className="fotoUsuario">
              <img className=" " src={camara} />
            </div>
          </div>
        </div>
      )}

      {props.operacion && (
        <div className="contenedorOperacion">
          <div className="subContenedorOperacion">
            <div className="tituloOperacion">
              <h2>SELECCIONE EL MODULO</h2>
            </div>

            <div className="contenedorDobleModulo">
              <a className="botonDobleModulo" href="/consultas">
                CONSULTAR OPERACION
              </a>

              <a className="botonDobleModulo" href="/generar">
                CREAR OPERACION
              </a>
            </div>
          </div>
        </div>
      )}

      {props.consulta && (
        <div className="contenedorConsulta">
          <div className="contenedorTiempoLugar">
            <div className="contenedorTiempoSalida">
              <h4 className="tiempoSalida">
                Salida: 00:00 {/*funcion de tiempo de salida*/}
              </h4>
              <h4 className="lugarSalida">
                Bogota D.C{/*funcion de ciduad de salida*/}
              </h4>
            </div>
            <div className="contenedorTiempoTranscurrido">
              <h4 className="tituloTiempoTranscurrido">TIEMPO TRANSCURRIDO</h4>
              <h4 className="tiempoTranscurrido">
                00:00{/*funcion de tiempo transcurrido*/}
              </h4>
            </div>
            <div className="contenedorTiempoLLegada">
              <h4 className="tiempoLlegada">
                Llegada: 00:00 {/*funcion de tiempo de llegada*/}
              </h4>
              <h4 className="lugarLlegada">
                Medellin {/*funcion de ciudad de llegada */}
              </h4>
            </div>
          </div>

          <div className="contenedorInformacionGeneral">
            <div className="informacionVuelo">
              <div className="informacionAvion">
                <ul>
                  <h3>Informacion de la Aeronave</h3>
                  <li>Matricula: {/*matricula */}</li>
                  <li>Tipo de Avion: {/*tipo de avion */}</li>
                  <li>
                    Capacidad material a bordo:
                    {/*informacion de la capicdad segun nave*/}
                  </li>
                </ul>
              </div>
              <div className="informacionTripulacion">
                <ul>
                  <h3>Informacion tripulantes</h3>
                  <li>Piloto: {/* nombres completos del piloto*/}</li>
                  <li>Libreta Militar:{/*Libreta militar del piloto */} </li>
                </ul>
                <ul>
                  <li>Copiloto: {/*nombres completos del copiloto*/}</li>
                  <li>Libreta Militar: {/*nombres completos del copiloto*/}</li>
                </ul>
                {/*Aqui debe se inserant la informacion de la tripulacion */}
              </div>
            </div>
            <div className="informacionCarga">
              <div className="tituloInformacionCarga">
                <h4>MATERIAL A BORDO</h4>
              </div>
              <div className="contenedorMaterialesAbordo">
                <p>Aqui va un componente de informacion</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
