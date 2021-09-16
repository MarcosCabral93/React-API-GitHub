import React,{useState, useCallback, useEffect} from 'react'
import {FaGithub, FaPlus, FaSpinner, FaBars, FaTrash} from 'react-icons/fa'
import {Container,Form,BtnSubmit, Lista, Delete} from "./StyledHome"
import {Link} from 'react-router-dom'
import api from '../../Services/Services'
function Home(){
    const [novoR, setNovoR]=useState("")
    const [repositorios, setRepositorios]=useState([])
    const [espera,setEspera]=useState(false)
    
    
    useEffect(()=>{

        const bd=localStorage.getItem('repo')
        if(bd)setRepositorios(JSON.parse(bd))
    },[])
    
    useEffect(()=>{
        localStorage.setItem('repo',JSON.stringify(repositorios))


    },[repositorios])



    const handleSubmit=useCallback((e) => {
        e.preventDefault()
        setEspera(true)
        async function sub(){
                try{
                    if(novoR==="") throw new Error("Preencha com um repositório")
                    const valid=repositorios.find(item=> item.nome===novoR)
                    if(valid)throw new Error("Já existe um repositório com esse nome")
                const response= await api.get(`repos/${novoR}`)
                const dados={
                    nome: response.data.full_name
                }
                console.log(dados)
                setRepositorios([...repositorios, dados])
                setNovoR("")
            }       
            catch(error){
                console.log(error)
            }finally{
            setEspera(false)}
            }
            sub()
        },[novoR,repositorios],
    )
    const deletar=useCallback((item)=>{

        const find=repositorios.filter((r)=>r.nome!==item);
        setRepositorios(find)

    },[repositorios]);
   
    return (
        <Container>

        <h1> <FaGithub size={25}/> Repositorios </h1>

        
        <Form onSubmit={handleSubmit}>
            <input type="text" placeholder="Adicionar Repositorio" 
            onChange={e=>setNovoR(e.target.value)} value={novoR} />

            <BtnSubmit Espera={espera?1:0}>
                {espera?( <FaSpinner size={15} color ='white'/>):
                (<FaPlus size={15} color='white'/>)}
            </BtnSubmit>

        </Form>

        <Lista>
            {repositorios.map((item)=>{
                return(
                    <li key={item.nome}>
                        <span>
                        <Delete onClick={()=> deletar(item.nome)}>
                            <FaTrash size={14}/>
                        </Delete>
                        {item.nome}</span>
                        <Link to={`/repositorio/${encodeURIComponent(item.nome)}`}> <FaBars size={15}/></Link>
                    </li>
                )
            })}
        </Lista>

        </Container>
    )
}export default Home