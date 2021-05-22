import { AppBar,Toolbar,Button } from '@material-ui/core';
import React from 'react';
import {Link} from 'react-router-dom';
import {CityLogo, showSuccessToast,showErrorToast} from '../utils/tools'
import {firebase} from '../firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Header = ({user}) => {

    const logoutHandler = () => {
        firebase.auth().signOut()
        .then(()=>{
            showSuccessToast('Logged Out')
        }).catch(err=>{
            console.log(err);
        })
    }

    return (
        <AppBar
            positon="fixed"
            style={{
                backgroundColor:'#98c5e9',
                boxShadow:'none',
                padding:'10px',
                borderBottom:'2px solid #00285e'
            }}
        >
            <Toolbar style={{display: 'flex'}}>
                <div style={{flexGrow:1}}>
                    <div className = "header_logo">
                        <CityLogo
                            link ={true}
                            linkTo={'/'}
                            width="70px"
                            height="70px"
                        />
                    </div>
                </div>
                <Link to="/the_team">
                    <Button color="inherit">The Team</Button>
                </Link>
                <Link to="/the_matches">
                    <Button color="inherit">Fixtures</Button>
                </Link>
                {user 
                    && 
                <>
                    <Link to="/dashboard">
                        <Button color="inherit">Dashboard</Button>
                    </Link>
                    <Button color="inherit" onClick={()=>{logoutHandler()}}>LogOut</Button>
                </>
                }
            </Toolbar>
        </AppBar>
    )
}

export default Header;