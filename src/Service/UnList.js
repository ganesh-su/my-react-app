import React from 'react';
import AnchorTag from './AnchorTag';
import './Components/Css/component.css';
function UnList(Props){
    return(
            <li class ="highlight-font">
                <AnchorTag color ={Props.attrib.colorid} aid ={Props.attrib.scrollp} NavLink = {Props.attrib.formNav} icon={Props.attrib.icon} 
                Name ={Props.attrib.Name} scrollToVal ={Props.attrib.scrollpos} /> 
            </li>
    ); 
}
export default UnList;