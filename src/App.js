import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import configureStore from "./configureStore";
import Register from "./register/Register";
import Login from "./login/Login";
import Profile from "./profile/Profile";

const store = configureStore({});

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/users/register" component={Register} />
          <Route exact path="/users/profile" component={Profile} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
