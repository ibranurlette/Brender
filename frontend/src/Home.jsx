import React, {Component, Fragment} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Index from './index/Index';


class App extends Component{
  render(){
  return (
    <Fragment>
    <Router>
      <div>
        <Switch>
          <Route path="/index">
            <Index />
          </Route>
        </Switch>
      </div>
    </Router>
  </Fragment>
  );
}
}

export default App;