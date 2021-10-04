import React, {useState, useEffect} from 'react'
// import axios from 'axios'

const Contenido = () => {

    const [datos, setDatos] = useState([])
console.log(datos)
    useEffect(() => {
        obtener()
    }, [])
    

    const obtener = async () => {

       let url = 'http://localhost:4000/datos'

      fetch(url)
      .then(response =>  response.json())
      .then(data => setDatos(data))
    }


    return (
        <div className="ContenidoPrincipal">


            {
                datos.map(pak => (
                    
            

            <div className="BarberiasYBarberos"> 
                <img src={pak.fotoperfil} alt="" />
                <h5>{pak.nombre}</h5>
                 
                <ul>
                    <li>{pak.experiencia} Años de experiencia </li>
                    <li>{pak.estado}</li>
 
                </ul> 
            </div>


                ))
        }

        </div>
    )
}

export default Contenido
