import React, {Fragment} from 'react'

import {Header} from '../Styles/Styles'

const HeaderInicio = () => {
    return (
        <Fragment>
        <Header>
               <h1 className="REMI">REMI</h1>
                <ul className="About_Secciones">
                    <li>Inicio</li>
                    <li>Aliados</li>
                    <li>Cobertura</li>
                    <li>Empleo</li>
                    <li>Registrate</li>
                </ul>
                <input className="CorreoConstraseña" type="text" placeholder="Correo" />
                <input className="CorreoConstraseña" type="Password" placeholder="Constraseña" />
                <p className="olvide">Olvide mi contraseña</p>
                <button className="botonEntrar">Entrar</button>
        </Header>
        
    </Fragment>

    )
}

export default HeaderInicio
