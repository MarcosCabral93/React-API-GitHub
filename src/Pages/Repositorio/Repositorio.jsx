import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import {Container, Loading, Card,Btn, Issues} from './Stylerepo'
import {FaArrowLeft} from 'react-icons/fa'
import api from '../../Services/Services'

function Repositorio(){
    const {local}=useParams()
    const p=decodeURIComponent(local)
    const [rep, setRep]=useState({})
    const [issues, setIssues]=useState([])
    const [load, setLoad]= useState(true)

    useEffect(()=>{
        const req= async ()=>{
            const [repo , iss]= await Promise.all([
                api.get(`/repos/${p}`),
                api.get(`/repos/${p}/issues`,
                {
                    params:{
                        state: 'open',
                        per_page: 5

                    }
                })

            ])
            setRep(repo.data)
            setIssues(iss.data)
            setLoad(false)
            console.log(repo.data)
            console.log(iss.data)
        }

       req()



    },[])
    if(load){
        return (
            <Loading>
                <h1> Carregando....</h1>
            </Loading>

        )
    }


    return (
        <Container>
            <Btn to='/'> 
            <FaArrowLeft color="black" size={30}/>
            </Btn>
            <Card>
            <h1>{rep.name}</h1>
            <img src={rep.owner.avatar_url} alt="imagem do repositorio" />
            <p> {rep.description}</p>
            </Card>
            <Issues>
                
                {issues.map((item)=>{
                    return(
                        <li>
                        <img src={item.user.avatar_url} alt="imagem do autor da Issue"/>

                        <div>
                            <strong>
                                <a href={item.html_url}>{item.title} </a>

                                {item.labels.map((itemL)=>{
                                    return(
                                        <span key={String(itemL.id)}>
                                            {itemL.name}

                                        </span>
                                    )
                                })}
                            </strong>
                            <p>
                                {item.user.login}
                            </p>
                        </div>
                        </li>
                    )


                })}
            </Issues>

        </Container>
        
    )
}export default Repositorio