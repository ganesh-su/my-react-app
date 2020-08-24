import React from 'react';
/*import logo from './logo.svg';*/
import './Components/Css/component.css';
import UnList from './UnList.js';
//import Avatar from '../Icons/ganesh.jpg';
import AnchorTag from './AnchorTag';
import Notfound from './DetailFrame/NotFound';
import Avatar from './Components/Icons/ganesh.jpg'

const styleObject = {
    "font-size" : "10px",
    "height" : "108px",
    "width" : "100%"
}
function Sidemenu() {
  return (
        <div>
            <nav class="main-menu">
                <ul >
                    <li > 
                    <div style={styleObject}>
                            <img src={Avatar} className="img-avatar" alt="Ganesh" width="15%" height="20%"/>
                          
                        </div>
                    </li>
                </ul>
                    <ul>
                    
                    <UnList attrib = {{formNav:"/home",icon:"fa fa-home",Name :"Home",scrollp:"/home#home",scrollpos:"500"}}/>
                    <UnList attrib = {{formNav:"/education",icon:"fa fa-book",Name :"Education",scrollp:"/home#education",scrollpos:"500"}}/>
                    <UnList attrib = {{formNav:"/certification",icon:"fa fa-certificate",Name :"Certifications",scrollp:"/home#certificate",scrollpos:"500"}}/>
                    <UnList attrib = {{formNav:"/objective",icon:"fa fa-laptop fa-2x",Name :"Career Objective",scrollp:"/home#objective",scrollpos:"500"}}/>
                    <UnList attrib = {{formNav:"/experience",icon:"fa fa-list fa-2x",Name :"Experience",scrollp:"/home#objective",scrollpos:"500"}}/>
                    <UnList attrib = {{formNav:"/skillset",icon:"fa fa-bar-chart-o fa-2x",Name :"Skills and Expertise",scrollp:"/home#skillset",scrollpos:"500"}}/>
                    <UnList attrib = {{formNav:"/project",icon:"fa fa-briefcase",Name :"Project",scrollp:"/home#project",scrollpos:"500"}}/>
                    <UnList attrib = {{formNav:"/achievement",icon:"fa fa-trophy fa-2x",Name :"Achievements",scrollp:"/home#achievement",scrollpos:"500"}}/>
                    <UnList attrib = {{formNav:"/interest",icon:"fa fa-cog fa-spin fa-3x fa-fw",Name :"Area of Interest",scrollp:"/home#interest",scrollpos:"500"}}/>
                    <UnList attrib = {{formNav:"/langknwn",icon:"fa fa-pencil-square-o fa-2x",Name :"Languages Known",scrollp:"/home#langknwn",scrollpos:"500"}}/>
                    
                </ul>
            </nav>
           
      
  </div>
  );
}

export default Sidemenu;
