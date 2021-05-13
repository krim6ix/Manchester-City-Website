import React from 'react';
import {Link} from 'react-router-dom';
import mCityLogo from '../Resources/images/logos/manchester_city_logo.png';


export const CityLogo = ({width,height,linkTo,link})=>{
    const template = <div 
        className="img_cover"
        style={{
            width : width,
            height : height,
            background : `url(${mCityLogo}) no-repeat`
        }}
        > 
        </div>

    if(link){
        return( 
            <div>
                <Link  to={linkTo}>
                    {template}
                </Link>
            </div>
        )
    }
    else{
        return template;
    }
}
