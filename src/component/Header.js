import { AppBar,Toolbar,Button } from '@material-ui/core';
import React from 'react';
import {Link} from 'react-router-dom';
import {CityLogo} from '../utils/tools'
const Header = () => {
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
                <Link to="/dashboard">
                    <Button color="inherit">Dashboard</Button>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default Header;