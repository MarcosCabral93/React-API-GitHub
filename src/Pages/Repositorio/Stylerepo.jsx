import styled from 'styled-components'
import {Link} from 'react-router-dom'
export const Container=styled.div`
max-width: 70%;
background: #fff;
box-shadow: 0 0 20px rgba(0,0,0,0.2);
border-radius: 4px;
padding: 30px;
margin: 80px auto;


`

export const Loading=styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100vh;
background-color: rgb(214, 213, 213);
`

export const Card=styled.article`
display:flex;
flex-direction: column;
align-items: center;

img{
    width: 150px;
   border-radius: 20%;
    margin: 20px 0;
   
}
h1{
    padding: 10px;
    color: black;
    font-size: 36px;
}
p{
    padding: 10px;
    margin-top: 5px;
    font-size: 13px;
    text-align: center;
    line-height: 1.4;
}
`
export const Btn=styled(Link)`
border: 0;
outline: 0;
background: transparent;

padding: 10px;
`
export const Issues=styled.ul`

margin-top: 30px;
padding-top: 30px;
border-top: 2px solid black;
list-style: none;

li{
    display: flex;
    padding: 15px 10px;

 & + li{
    margin-top: 15px;
}

img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #424649;
}
div{
    display: 1;
    margin-left: 10px;

    p{
        margin-top: 10px;
        font-size: 12px;
        color:black;

    }
}
strong{
    font-size: 15px;


    a{
        text-decoration: none;
        color: #424649;
        transform: 0.5;
        &:hover{

            color: #0808eb;
        }
    }
    span{
        background: #222;
        color: white;
        border-radius: 4px;
        font-size: 12px;
        font-weight: bold;
        padding: 5px 7px;
        margin-left: 10px;
    }
}

}
`
export const PageAction=styled.div`
display: flex;
align-items: center;
justify-content:space-between ;
button{
    outline: 0;
    border: 0;
    background: black;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    &:disabled{
        cursor: not-allowed;
        opacity: 0.5;
    }
}`
export const Filtros=styled.div`
margin:15px 0;
button{
    outline:0;
    border:0;
    padding: 8px;
    border-radius: 4px;
    margin: 0 3px;

    &:nth-child(${props=> props.active +1}){
        background: blue;
        color: white;
        font-weight: bold;
    }

}
`