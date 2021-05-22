import React from 'react'
import { Switch, Route ,BrowserRouter } from 'react-router-dom'
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './component/Home'
import Signin from './component/Signin'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Routes = ({user})=>{
  return (
    <BrowserRouter>
    <Header user = {user}/>
    <Switch>
      <Route path='/signin' exact component={Signin}/>
      <Route path="/" exact component={Home}></Route>
    </Switch>
    <ToastContainer/>
    <Footer/>
    </BrowserRouter>
  );
}

export default Routes;
