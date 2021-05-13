import React from 'react'
import { Switch, Route ,BrowserRouter } from 'react-router-dom'
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './component/Home'
import Signin from './component/Signin'
const Routes = ()=>{
  return (
    <BrowserRouter>
    <Header/>
    <Switch>
      <Route path='/signin' exact component={Signin}/>
      <Route path="/" exact component={Home}></Route>
    </Switch>
    <Footer/>
    </BrowserRouter>
  );
}

export default Routes;
