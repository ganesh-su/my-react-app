import React from "react";
import Stepper from '../Components/Stepper';

const steps = [{title: 'Stage - 1'}, {title: 'Stage - 2'}, {title: 'Stage - 3'}];
const state = [{
    activeStep: 1,}
];
const LangSkills = () => {
  return (
    <div class ="bodypanel">
        <div class ="box">
             <Stepper  steps={steps}  activeStep={state.activeStep} showNumber={false}/>
        </div>
    </div>
    
  );
}

export default LangSkills;