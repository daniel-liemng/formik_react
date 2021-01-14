import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
// import YouTubeForm from "./components/YouTubeForm";
import Navbar from "./components/Navbar";
import FormikContainer from "./components/FormikContainer";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import EnrollmentForm from "./components/EnrollmentForm";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='App'>
        <Switch>
          <Route exact path='/' component={FormikContainer} />
          <Route exact path='/login' component={LoginForm} />
          <Route exact path='/register' component={RegistrationForm} />
          <Route exact path='/enroll' component={EnrollmentForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
