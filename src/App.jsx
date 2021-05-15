import React from 'react';
import {  Route, Switch ,Redirect } from 'react-router-dom';
import Home from "./Home";
import Login from './Login';
import SignUp from './SignUp';
import Menu from './Menu';
import About from './About';
import Gallary from './Gallary';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



const App = () =>{
    return(
        <>
            <Menu/>
            <Switch>
                <Route exact path = '/' component = {Home} />
                <Route exact path = '/login' component = {Login}/>
                <Route exact path = '/signup' component = {SignUp}/>
                <Route exact path = '/about' component = {About}/>
                {/*<Route component = {Error}/>*/}
                <Redirect to = '/' />
            </Switch>
            <Gallary/>
        </>
    );
}

export default App;