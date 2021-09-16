import styled, {keyframes,css} from 'styled-components'

export const Container=styled.div`
margin: 80px auto;
background-color: white;
max-width: 70%;
padding: 10px;
border-radius: 10px;

h1{
    display: flex;
    align-items: center;
}
h1 svg{
    margin-right: 10px;
}
   

`
export const Form=styled.form`
margin-top: 30px;
display: flex;
flex-direction: row;

input{
    flex:1;
    padding: 10px 15px;
    text-align: center;
    border: solid 1px #bdbdbd;
}


`

//animacao
const animacao=keyframes`
from{
    transform: rotate(0deg);
}
to{
    transform: rotate(360deg);
}
`
export const BtnSubmit=styled.button.attrs(props=>({
type:"submit",
disabled:props.espera
}))`
background-color: #424649;
border: 0;
padding: 0 15px;
display: flex;
border-radius: 5px;
margin-left: 10px;
align-items: center;
justify-content: center;

&[disabled]{
    cursor:not-allowed;
    opacity: 0.5;
}
${props=> props.espera && 
css`
svg{
    animation: ${animacao} 2s linear infinite;
}
`
}
`;

export const Lista=styled.ul`
list-style: none;
margin-top: 20px;

li{
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;


    /* so pegar a partir do segundo */
    & + li{
        border-top: 1px solid black;
    }
    a {
        color: blue;
        text-decoration: none;
    }
}
`
export const Delete=styled.button`


`