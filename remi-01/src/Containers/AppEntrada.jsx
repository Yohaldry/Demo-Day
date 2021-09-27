import React from 'react'
import Aliados from '../Components/Aliados'
import Burbujas from '../Components/Burbujas'
import Cobertura from '../Components/Cobertura'
import HeaderInicio from '../Components/HeaderInicio'
import '../Styles/main.css'

const AppEntrada = () => {
    return (
        <div>
           <HeaderInicio />
           <Burbujas />
           <Aliados />
           <Cobertura />
        </div>
    )
}

export default AppEntrada
