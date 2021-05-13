import React from 'react';
import { CityLogo } from '../utils/tools';

const Footer = ()=>{
    return (
        <footer className = "bck_blue">
            <div className = "footer_logo">
                <CityLogo
                    link={true}
                    linkTo = {'/'}
                    width ='70px'
                    height='70px'
                />
                <div className='footer_discl'>
                    Manchester City 2021. All Rights Reserved
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;