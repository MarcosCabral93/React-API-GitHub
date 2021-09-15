import styled from 'styled-components'

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
export const BtnSubmit=styled.button`
background-color: #424649;
border: 0;
padding: 0 15px;
display: flex;
border-radius: 5px;
margin-left: 10px;
align-items: center;
justify-content: center;


`
