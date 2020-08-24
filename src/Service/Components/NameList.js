import React,{Component} from 'react';
 import  progress from 'react-progressbar';
 import '../Components/Css/CustomCard.css' 

 const styleObject = {
    "width" :"80px",
    "justify-content": "left"
}

const tableStyle = {
    "width" :"280px",
    "justify-content": "left"
}


  function NameList(Props){
    
    const listval = Props.Props.contentList;
    const skillsSet = [{listval}];
   
    const nameList = listval.map(obj=>
        <tr >
         <td>{obj.name}</td>
         <td><progress class ="prog-prop"  value={obj.id} /></td>
          </tr>
         //<ul class ="prog-prop">{obj.name}<progress style={styleObject} value={0.1} /></ul>
         
         );
    
    return(
        <table style={tableStyle}>
        <tbody>
        {nameList}
        </tbody>
     </table>
    );
  }

  export default NameList;