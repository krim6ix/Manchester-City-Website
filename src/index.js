import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Route';
import {firebase} from './firebase';
import './Resources/css/app.css'

const App = ({user},props) =>{
  return(
    <Routes user ={user}/>
  )
}


//when state change it will fire this fun.
firebase.auth().onAuthStateChanged((user) => {
  ReactDOM.render(<App user = {user}/>,document.getElementById('root'));  
})

