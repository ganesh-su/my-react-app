import React from 'react';
import './Components/Css/component.css';
import { HashLink as Link } from 'react-router-hash-link';

var  i = 0;
const color =["#1e4080","#178712","#b50b45","#3d0457","#161417","#cfba04"];
const hovercolor = ["#1ab2d8","#23e629","#f25288","#c16be8","#8a858c","#29281f"];
const styleObject = {
    "font-size" : "10px",
    "height" : "108px",
    "width" : "100%"
}
function DynamicColor(Props) {
    if(Props =="colorchng" ){
        i= i<color.length-1 ? ++i:0;
        document.querySelector("nav").style.background = color[i];
        let myElements = document.querySelectorAll(".icon");
        document.documentElement.style.setProperty('--primary-color', color[i]);
        document.documentElement.style.setProperty('--hover-color', hovercolor[i]);
        console.log(color[i]+" , "+hovercolor[i]);
    }
}

function AnchorTag(Props){
   
    return(
            <Link to={Props.aid} onClick={() => DynamicColor(Props.color)}>
                <i class={Props.icon} ></i>
                <span class="nav-text">
                    {Props.Name}
                </span>
            </Link>
            
    );
}
export default AnchorTag;