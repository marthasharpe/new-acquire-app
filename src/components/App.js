import React from 'react';
import AddCompany from './AddCompany';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppBar from './appBar/AppBar';
import SeeCompanies from './seeCompanies/SeeCompanies';
import Home from './home/Home';
import EditCompany from './EditCompany';

function App() {
  return (
    <Router>
      <AppBar />
      <Switch>
        <Route path="/tiles" component={SeeCompanies} />
        <Route path="/add" component={AddCompany} />
        <Route path="/edit/:id" component={EditCompany} />  
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
