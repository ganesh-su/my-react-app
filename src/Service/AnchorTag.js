import React from 'react';
import './Components/Css/component.css';
import { HashLink as Link } from 'react-router-hash-link';




function getScrollPos(Props) { 
    console.log(Props)
     window.scrollTo(0, Props);
} 
function AnchorTag(Props){
    return(
            <Link  to={Props.aid}>
                <i class={Props.icon} ></i>
                <span class="nav-text">
                    {Props.Name}
                </span>
            </Link>
            
    );
}
export default AnchorTag;