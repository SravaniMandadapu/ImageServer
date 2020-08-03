import React from 'react';
import { Route } from "react-router-dom";
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Upload from './components/Upload';
import Index from "./components/Index"
import Layout from "./components/Layout"

function App() {
  return (
    
    <React.Fragment>
      <Layout>
         <Route exact path="/login" component={Login} />
         <Route exact path="/SignUp" component={SignUp} />
         <Route exact path="/Upload"  component={Upload} />
         <Route exact path="/images" component={Index} />
        </Layout>
    </React.Fragment>
    
  );
}

export default App;
