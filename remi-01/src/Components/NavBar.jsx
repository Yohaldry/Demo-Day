import React, {Fragment} from 'react'
import Contenido from './Contenido'


const NavBar = () => {

    
    return (
    <Fragment>
        <div className="container_inicio">
            <div className="headerPrincipal">
                <h1>R E M I</h1>
 
                <input type="search" placeholder="Buscar"/>
                <button><i class="fas fa-search"></i></button>
            </div>
  
         <div className="nav_derecho">

            <div className="Remi_Redes">
                <img src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1632818447/Remi/Imagen3_p5ft9s.png" alt="" />
                <h5>Sigenos</h5>
            </div>

        <div className="perfil">
            <i class="fas fa-headset"></i>
            <h5>Soporte</h5>
        </div>

        <div className="delivery">
        <i class="fas fa-hand-holding-usd"></i>
            <h5>Donaciones</h5>
        </div>

        <div className="descargarApp">
        <i class="fas fa-sign-out-alt"></i>
            <h5>Cerrar Sesion</h5>
        </div>

    </div>

         <div className="nav_izquierdo">

                <div className="house">
                <i class="fas fa-home"></i>
                <h5>Barberias</h5>
                </div>

                <div className="perfil">
                <i class="fas fa-user-alt"></i>
                <h5>Perfil</h5>
                </div>

                <div className="delivery">
                <i class="fas fa-biking"></i>
                <h5>Delivery</h5>
                </div>

                <div className="Aliado">
                <i class="fas fa-handshake"></i>
                <h5>Soy Aliado</h5>
                </div>

            </div>


    

            <Contenido />
        </div>
    </Fragment>
    )
}

export default NavBar
