import {BrowserRouter, Switch,Route} from 'react-router-dom'
import React from 'react'
import Home from './Pages/Home/Home'
import Repositorio from './Pages/Repositorio/Repositorio'
function Rota(){

    return(

        <BrowserRouter>

        <Switch>
        <Route  exact path="/">
            <Home/>
        </Route>
        <Route exact path="/repositorio/:repositorio">
            <Repositorio/>

        </Route>

        </Switch>

        </BrowserRouter>
    )
}export default Rota