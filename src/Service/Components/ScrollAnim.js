import react, { useEffect } from 'react';
import aos from "aos";
import 'aos/dist/aos.css';

const ScrollAnim = () => {
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
   return(
       <div>
           <h1>ScrollAnim</h1>
       </div>
   );
}