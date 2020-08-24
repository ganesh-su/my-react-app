import React from 'react';
import '../Components/Css/CustomCard.css' ;
import Stepper from 'react-js-stepper'

const activeStepcalc = () => {
  var activeStepval;
  window.addEventListener('scroll',() =>{
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    console.log(document.documentElement.scrollHeight +" , "+ window.innerHeight+" , "+scrollable+" , "+scrolled);
    /*if(Math.ceil(scrolled) >= 1){*/
      return 2;
    /*}*/
  });
  
}
const stylecomp = {
   "position": "fixed"
}
 function HStepper(Props){
     return(
        <div>
         
         <Stepper steps={Props.steps} activeStep={Props.activeStep} 
             onSelect={""} showNumber={Props.showno} />
        </div>
    );
 }
 export default HStepper;