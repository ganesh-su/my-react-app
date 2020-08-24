import React, { useEffect, useState } from 'react';
import CustomCard from '../Components/CustomCard';
import HStepper from '../Components/HStepper';
import '../Components/Css/CustomCard.css' 
import Avatar from '../Components/Icons/ganesh.jpg';
import {ScrollBox, ScrollAxes, FastTrack} from 'react-scroll-box';
import Aos from "aos";
import 'aos/dist/aos.css';
import Notfound from './NotFound';
import LangSkills from './LangSkills';
import '../Components/Css/AnimatedBg.css';



const btnstyle = {
    "align" : "right",
    "height" : "20%",
    "width" : "16%",
    "padding" : "2%",
    "border" : "0px solid black"
}

const paddingTop = {
    "margin-top": "8vh",
    "margin-bottom": "16vh",
    "margin-right": "0px",
    "margin-left": "0px"
    
}
function  ScrlTop(){
    window.scrollTo(0, 0);
}

const Home = () => {
    useState(()=>{
        Aos.init({duration:2000});
        document.documentElement.style.setProperty('--primary-color', "#1e4080");
        document.documentElement.style.setProperty('--hover-color', "#1ab2d8");
    },[])
    window.addEventListener('scroll',() =>{
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        if(Math.ceil(scrolled) >= 100){
            Aos.init({duration:2000});
        }
    });
   
   return(
      
        <section class = "detail-sec">
                    <h1 id ="home" class="padTop" data-aos ="fade-right">Home</h1>
                    <div style={paddingTop}  data-aos ="flip-left" class ="container">
                            <CustomCard attrib = {{title:"Ganesh Kumar Surendran",icon:{Avatar},isimage:true,submenu:true,isProg:false,btnshw:true,
                            content :"Junior Software Engineer",btnName :"Contact"}}/>
                    </div>
                   
                    <h1 id ="education" class="padTop" data-aos ="fade-right">Education</h1>
                    <div style={paddingTop}  data-aos ="fade-up"  class ="container">
                        <CustomCard attrib = {{title:"B.E (CSE) (2013 - 2017)",icon:"fa fa-book fa-1x",isimage:false,submenu:false,isProg:false,btnshw:true,
                        content :"Ponjesly College of Engineering Nagercoil.",btnName :"CGPA: 7.93"}}/>
                        <CustomCard attrib = {{title:"HSC (2012 – 2013)",icon:"fa fa-book fa-1x",isimage:false,submenu:false,isProg:false,btnshw:true,
                        content :"DVD Higher Sec School,Nagercoil.",btnName :"Score: 82.33%"}}/>
                        <CustomCard attrib = {{title:"SSC (2010 - 2011)",icon:"fa fa-book fa-1x",isimage:false,submenu:false,isProg:false,btnshw:true,
                        content :"DVD Higher Sec School,Nagercoil.",btnName :"Score: 95%"}}/>
                    </div>
                  
                    <h1 id ="certificate"  class="padTop" data-aos ="fade-right">Certification</h1>
                    <div style={paddingTop}  data-aos ="fade-up"  class ="container">
                        <CustomCard  attrib = {{title:"BEC",icon:"fa fa-certificate fa-1x",isimage:false,submenu:false,isProg:false,btnshw:true,
                        content :"Business English Certificates",btnName :"REFNO:167IN8654107"}}/>
                        <CustomCard attrib = {{title:"NIIT",icon:"fa fa-certificate fa-1x",isimage:false,submenu:false,isProg:false,btnshw:true,
                        content :"Advanced Java Certification.",btnName :"Good"}}/>
                    </div>
                    <h1 id ="objective"  class="padTop" data-aos ="fade-right">Career Objective & Experience</h1>
                    <div style={paddingTop}  data-aos ="fade-up"  class ="container">
                            <CustomCard attrib = {{title:"Career Objective",icon:"fa fa-laptop fa-1x",
                            isimage:false,submenu:false,isProg:false,btnshw:false,
                            content :"To obtain a responsible position in an environment where my resourceful experience and skills "+
                            "will add value to organizational operations as well as support my innovative thinking, skill"+
                            "development and increased benefits to my family.",btnName :"Read More"}}/>
                            <CustomCard attrib = {{title:"IVTL Infoview Technologies Pvt. Ltd, Chennai.",icon:"fa fa-list fa-1x",
                            isimage:false,submenu:false,isProg:false,btnshw:true,
                                content :"As a part of Agile development,involved in all areas of automation,"+
                            " testing as well as development design.",btnName :"2017 - Present"}}/>
                    </div>
                    <h1  id ="skillset"  class="padTop"  data-aos ="fade-right">Skills and Expertise</h1>
                    <div style={paddingTop}  data-aos ="fade-up"  class ="container">
                        <CustomCard attrib = {{title:"Hard Skills",icon:"fa fa-bar-chart-o fa-1x",isimage:false,submenu:false,isProg:true,btnshw:false,
                                            contentList :[
                                                { id: 0.8, name: 'ReactJs' },
                                                { id: 1, name: 'AdvanedJava' },
                                                { id: 0.9, name: 'C' },
                                                { id: 0.8, name: 'C++' },
                                                { id: 0.9, name: 'CSS Animation' },
                                                { id: 0.7, name: 'Python' },
                                                { id: 0.7, name: 'NodeJs' },
                                                { id: 0.6, name: 'AngularJs' },
                                                { id: 0.7, name: 'Delphi' }
                                              
                                              ],btnName :"01/07/2017 - Present"}}/>
                        <CustomCard attrib = {{title:"Soft Skills",icon:"fa fa-list fa-1x",isimage:false,submenu:false,isProg:true,btnshw:false,
                               contentList :[
                                { id: 0.8, name: 'Problem Solving' },
                                { id: 0.8, name: 'Innovative thinking' },
                                { id: 0.9, name: 'Tool development' },
                                { id: 0.9, name: 'Coding Standards' },
                                { id: 0.8, name: 'UI standards' },
                                { id: 0.8, name: 'Communication' },
                                { id: 1, name: 'Time Management' },
                                { id: 0.7, name: 'Presentation Skills' },
                                { id: 0.9, name: 'Debugging Skills' }
                                ],btnName :"01/07/2017 - Present"}}/>
                            
                    </div>
                    <h1  id ="project"   class="padTop" data-aos ="fade-right">Project</h1>
                    <div style={paddingTop}  data-aos ="fade-up"  class ="container">
                        <CustomCard attrib = {{title:"Hue",icon:"fa fa-briefcase fa-1x",isimage:false,submenu:false,isProg:false,btnshw:true,
                                    content :"An A.I. based ERP product, played key"+
                                    "role in developing and modifying screens according to client’s specifications",
                                    btnName :"Project 1"}}/>
                         <CustomCard attrib = {{title:"E-commerce",icon:"fa fa-briefcase fa-1x",isimage:false,submenu:false,isProg:false,btnshw:true,
                                    content :"An Agile development process played key role as developer to ensure the"+
                                    " quality of the screen. Also analyzed, managed and evaluated new software"+
                                    " features according to client’s specification.",
                                    btnName :"Project 2"}}/>
                         <CustomCard attrib = {{title:"TAAS",icon:"fa fa-briefcase fa-1x",isimage:false,submenu:false,isProg:false,btnshw:true,
                                    content :"Played key role as a developer in selenium automation development"+
                                    " to perform regression testing.",
                                    btnName :"Project 3"}}/>
                        <CustomCard attrib = {{title:"Automation and Tool Development",icon:"fa fa-briefcase fa-1x",isimage:false,submenu:false,isProg:false,btnshw:true,
                                    content :"As a part of automation development team have to design flexible "+
                                    "desktop or webapplications in order to reduce developer's or tester's development time.",
                                    btnName :"Project 4"}}/>
                        <CustomCard attrib = {{title:"IntraWeb",icon:"fa fa-briefcase fa-1x",isimage:false,submenu:false,isProg:false,btnshw:true,
                                    content :                                    "Played key role as a QC member Ensuring the quality,UI standards and Coding standards "+
                                    "of a webapplication created using a set of real time automation tools ",
                                    btnName :"Project 5"}}/>
                           
                    </div>
                    <h1 id ="achievement" class="padTop" data-aos ="fade-right">Achievement</h1>
                    <div style={paddingTop}  data-aos ="fade-up"  class ="container">
                        <CustomCard  attrib = {{title:"File Hunter",icon:"fa fa-trophy fa-1x",isimage:false,submenu:false,isProg:false,btnshw:true,
                        content :"Created a file fetching tool which fetches the JSP file from database using servlet"+
                       " name. It reduces the development time by 20%.",btnName :"Java"}}/>
                        <CustomCard attrib = {{title:"G-Share",icon:"fa fa-trophy fa-1x",isimage:false,submenu:false,isProg:false,btnshw:true,
                        content :"Created G-Share (Grant and Share) tool which can share files of any type up to 2GB"+
                        " data from one PC to other at the speed of 14 to 30 megabyte speed within 3 to 4 seconds of time.",btnName :"FTP/SFTP"}}/>
                        <CustomCard attrib = {{title:"AWS Hunter",icon:"fa fa-trophy fa-1x",isimage:false,submenu:false,isProg:false,btnshw:true,
                        content :"Created a plugin called AWS Hunter. Using this plugin, developer can check the"+
                        " currently available client servers, are able to connect with new servers, also notifies server up and"+
                        " down time using system tray pop-up.",btnName :"JFace/SWT"}}/>
                        <CustomCard attrib = {{title:"Daily Performance",icon:"fa fa-trophy fa-1x",isimage:false,submenu:false,isProg:false,btnshw:true,
                        content :"Created Daily status sheet creator tool for documenting the team member’s"+
                        " daily task details.",btnName :"Java"}}/>
                        <CustomCard attrib = {{title:"A2 bot",icon:"fa fa-trophy fa-1x",isimage:false,submenu:false,isProg:false,btnshw:true,
                        content :"Developed NLP based A2 bot, which could communicate and remember the information"+
                        "that we speak with it. Also it could translate the content from Japanese to English and works as a"+
                        "developer assistant",btnName :"Java/Python"}}/>
                        <CustomCard attrib = {{title:"Log Time Scheduler",icon:"fa fa-trophy fa-1x",isimage:false,submenu:false,isProg:false,btnshw:true,
                        content :"Created desktop based application using system tray icon. Using this tool"+
                        " user can schedule and monitor the user’s log in time & log out time to improve the productivity."+
                        " It also notifies the user to put log hours regularly.",btnName :"Java"}}/>
                    </div>
                    <h1  id ="interest"  class="padTop"  data-aos ="fade-right">Area of interest</h1>
                    <div style={paddingTop}  data-aos ="fade-up"  class ="container">
                    <CustomCard attrib = {{title:"Area of interest",icon:"fa fa-cog fa-spin fa-1x",isimage:false,submenu:false,isProg:true,btnshw:false,
                                      contentList :[
                                        { id: 1, name: 'Web Design and Development' },
                                        { id: 1, name: 'Java Programming' },
                                        { id: 0.9, name: 'Automation and Tool development' },
                                        { id: 0.7, name: 'NLP' }], 
                                    btnName :"Project 4"}}/>
                    </div> 
                    <h1 id ="langknwn" class="padTop"  data-aos ="fade-right">Languages Known</h1>
                    <div style={paddingTop}  data-aos ="fade-up"  class ="container">
                         <CustomCard attrib = {{title:"Languages Known",icon:"fa fa-pencil-square-o fa-1x",isimage:false,submenu:false,isProg:true,btnshw:false,
                               contentList :[
                                { id: 1, name: 'Tamil' },
                                { id: 1, name: 'English' },
                                { id: 0.7, name: 'Malayalam' }],btnName :""}}/>
                    </div>
                    <button  class = "back-to-top"><i class="fa fa-chevron-circle-up " onClick={ScrlTop} ></i></button>
                   

                    

                   
        </section>
           
      
     );
 }
 export default Home;