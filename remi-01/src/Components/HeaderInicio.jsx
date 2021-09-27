import React from 'react'

import {LogoHeader, Header} from '../Styles/Styles'

const HeaderInicio = () => {
    return (

        <Header>
               <LogoHeader src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1632710853/Imagen6_ypsoxc.png" alt="" />
                <ul className="About_Secciones">
                    <li>Inicio</li>
                    <li>Aliados</li>
                    <li>Cobertura</li>
                    <li>Empleo</li>
                    <li>Registrate</li>
                </ul>
                <input className="CorreoConstraseña" type="text" placeholder="Correo" />
                <input className="CorreoConstraseña" type="Password" placeholder="Constraseña" />
                <button className="botonEntrar">Entrar</button>
        </Header>
    )
}

export default HeaderInicio
