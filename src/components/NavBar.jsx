import React from 'react'
import Logout from './Logout'


function top(props) {
  return (
    <div className='header'>

      <div className='logo'>

        <h1>RIMPA</h1>

      </div>

      <div className='logoDescript'>
        <p>REGISTRO E IDENTIFICACION DE MERCANCIAS PELIGROSAS<br/>EN LA AVIACION MILITAR</p>
      </div>

      { props.noIniciado &&
          <div className='ancles1'> 
            <a to href='/'>Login</a>
            <a to href='/registro'>Registrarse</a>
          </div>
       
      }

      { props.iniciado &&
        <div className='ancles2'> 
         <a to href='/misDatos'>Mis datos</a>
         <a to href='/operacion'>Operacion</a>
         <a to href='/asistencia'>Asistencia</a>
         <Logout />
       </div>
      }
    </div>
  )
}

export default top
