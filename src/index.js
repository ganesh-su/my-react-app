import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sidemenu from './Service/Sidemenu.js';
import * as serviceWorker from './serviceWorker';
import './Service/Components/Css/component.css';
import Home from './Service/DetailFrame/Home';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import Notfound from './Service/DetailFrame/NotFound';
import {Redirect} from 'react-router-dom';
import  NotFound from './Service/DetailFrame/NotFound';
ReactDOM.render(<Router>
   <Sidemenu/>
  
   <switch>
      <Route exact path ="/" component={App}/>
      <Route path ="/home" component={Home}/>
      <Route path ="/404" component={Notfound}/>
      <Redirect to="/home"/>
   </switch>
 </Router>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
