import React from 'react'
import {FaGithub, FaPlus} from 'react-icons/fa'
import {Container,Form,BtnSubmit} from "./StyledHome"

function Home(){
    return (
        <Container>

        <h1> <FaGithub size={25}/> Repositorios </h1>

        
        <Form>
            <input type="text" placeholder="Adicionar Repositorio" />

            <BtnSubmit>
                <FaPlus size={15} color='white'/>
            </BtnSubmit>

        </Form>


        </Container>
    )
}export default Home