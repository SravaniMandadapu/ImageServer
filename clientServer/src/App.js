import React from 'react';
import { Route } from "react-router-dom";
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Upload from './components/Upload';
import Index from "./components/Index"
import Logout from "./components/Logout"
import  Landing from "./components/Landing"


function App() {
  return (
    
    <React.Fragment>
      
         <Route exact path="/login" component={Login} />
         <Route exact path="/SignUp" component={SignUp} />
         <Route exact path="/images/upload"  component={Upload} />
         <Route exact path="/images" component={Index} />
         <Route exact path="/logout"  component={Logout} />
         <Route exact path="/" component={Landing} />
      
    </React.Fragment>
    
  );
}

export default App;
