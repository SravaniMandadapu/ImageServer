import React from 'react';
import { Route } from "react-router-dom";
import Login from "./components/Login"
import SignUp from "./components/SignUp"

function App() {
  return (
    <React.Fragment>
      <Route exact path="/login" component={Login} />
      <Route exact path="/SignUp" component={SignUp} />
    </React.Fragment>
    
  );
}

export default App;
