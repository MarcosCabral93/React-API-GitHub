import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import {Container, Loading, Card,Btn, Issues,PageAction,Filtros} from './Stylerepo'
import {FaArrowLeft} from 'react-icons/fa'
import api from '../../Services/Services'

function Repositorio(){
    const {local}=useParams()
    const p=decodeURIComponent(local)
    const [rep, setRep]=useState({})
    const [issues, setIssues]=useState([])
    const [load, setLoad]= useState(true)
    const [nav, setNav]=useState(1)
    const [filtros]=useState([
        {state: 'all', label: 'todas',active: true },
        {state: 'open', label: 'abertas',active:false },
        {state: 'closed', label: 'fechadas',active: false},

    ])
    const[indice, setIndice]=useState(0)

    useEffect(()=>{
        const req= async ()=>{
            const [repo , iss]= await Promise.all([
                api.get(`/repos/${p}`),
                api.get(`/repos/${p}/issues`,
                {
                    params:{
                        state: filtros.find(f=>f.active).state,
                        per_page: 5

                    }
                })

            ])
            setRep(repo.data)
            setIssues(iss.data)
            setLoad(false)
        }

       req()

    },[p,filtros])
    useEffect(()=>{

        const req= async ()=>{
             
            const res= await api.get(`/repos/${p}/issues`,
            {
                params:{
                    state: filtros[indice].state,
                    per_page: 5,
                    page: nav

                }
            })
            setIssues(res.data)
        
        
        }
        req()

    },[nav,p,filtros,indice])

    function handleNav(acao){
       setNav(acao==='voltar'? nav-1:nav+1)
      
    }
function handleFiltro(ind){
    setIndice(ind);
}

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
            <Filtros active={indice}>
            {filtros.map((item,index)=>{
                return(
                    <button type='button' onClick={()=>{handleFiltro(index)}} key={item.label}> {item.label}</button>
                )

            })}

            </Filtros>
            <Issues>
                
                {issues.map((item)=>{
                    return(
                        <li key={String(item.id)}>
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


                <PageAction>
                <button disabled={nav<2} onClick={()=>handleNav('voltar')}>voltar</button>
                <button onClick={()=>handleNav('avancar')}> próximo</button>
                </PageAction>
        </Container>
        
    )
}export default Repositorio