import React from 'react'

const Registro = () => {
    return (
        <div className="container_Registro">
            <img className="User" src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1632817110/Remi/Imagen6_bnc1ph.png" alt="" />
            <div className="Form_Registro">
                    <h1>Registro</h1>
                    <input type="text" placeholder="Nombre" />
                    <input type="text" placeholder="Correo Electronico" />
                    <input type="password" placeholder="Contraseña" />
                    <input type="password" placeholder="Confirmar Contraseña" />
                    <button>Listo</button>
            </div>
        </div>
    )
}

export default Registro
