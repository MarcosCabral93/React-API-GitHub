import React from 'react'
import {useParams} from 'react-router-dom'

function Repositorio({match}){
    const {local}=useParams()
    return (
        <h1>{decodeURIComponent(local)}</h1>
    )
}export default Repositorio