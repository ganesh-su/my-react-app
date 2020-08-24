import React from 'react';
import {Link} from 'react-router-dom';
import NameList from './NameList';
import './Css/CustomCard.css'


const color =["#1e4080","#178712","#b50b45","#3d0457","#161417","#cfba04"];
const hovercolor = ["#1ab2d8","#23e629","#f25288","#c16be8","#8a858c","#29281f"];
var  i = 0;

const styleObject = {
 
  "font-size" : "30px",
  
}

function DynamicColor() {
    i= i<color.length-1 ? ++i:0;
  document.querySelector("nav").style.background = color[i];
  let myElements = document.querySelectorAll(".icon");
  document.documentElement.style.setProperty('--primary-color', color[i]);
  document.documentElement.style.setProperty('--hover-color', hovercolor[i]);
  console.log(color[i]+" , "+hovercolor[i]);
}

function CompDisplay(props) { 
    if(!props.toDisplay.attrib.isimage) 
      return <div class ="icon">  <i class={"fad "+props.toDisplay.attrib.icon} ></i></div>; 
    else
      return <img src={props.toDisplay.attrib.icon.Avatar} className="icon" alt="Ganesh" width="15%" height="20%"/>; 
} 
function SubMenuIcon(Props){
  if(Props.toDisplay.submenu){
    return <div class = "padTop">
        <a class = "share-icon" href="https://www.linkedin.com/in/ganesh-kumar-s-b8334b120"><i style={styleObject} class="fa content fa-linkedin-square" ></i></a>
        <a class = "share-icon" href="https://github.com/ganesh-su"><i style={styleObject} class="fa content fa-github" ></i></a>
        <a class = "share-icon" href="https://instagram.com/ganesh.kuttan?igshid=1uqqus6ntplh9"><i style={styleObject} class="fa content fa-instagram" ></i></a>
        <a class = "share-icon"><i style={styleObject} class="fa content fa-heart " onClick={DynamicColor}></i></a>
      </div> 
  }else if(!Props.toDisplay.btnshw){
    return false;
  }else{
    return <a class = "card-Link" href="#">{Props.toDisplay.btnName}</a>;
  }
}


  
function ListDisplay(Props) { 
  if(Props.toDisplay.attrib.isProg) {
     //console.log(Props.toDisplay.attrib.contentList.people);
    return <NameList Props= {Props.toDisplay.attrib}/>; 
  }else{
    return <p>{Props.toDisplay.attrib.content}</p>; 
}
} 
function skillsList(Props) {
  const  data  = Props;
  const namesList = data.map(name=>{
      return(
          <li>{name.name}</li>
      )
  })

  return(
      <ul>
          {namesList}
      </ul>
  );
}


function CustomCard(Props){
  var item;
  return(
    <div class ="bodypanel">
          <div class ="box">
           <CompDisplay toDisplay = {Props} /> 
            <div class= "content">
              <h3>{Props.attrib.title}</h3>
              <ListDisplay toDisplay = {Props}/>
                <SubMenuIcon toDisplay = {Props.attrib}/>
            </div>
          </div>
        </div>
  );
}
export default CustomCard;