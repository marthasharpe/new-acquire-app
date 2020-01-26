import React from 'react';
import AddCompany from './AddCompany';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppBar from './AppBar';
import CompanyTiles from './CompanyTiles';
import Home from './Home';
import EditCompany from './EditCompany';

function App() {
  return (
    <Router>
      <AppBar />
      <Switch>
        <Route path="/tiles" component={CompanyTiles} />
        <Route path="/add" component={AddCompany} />
        <Route path="/edit/:id" component={EditCompany} />  
        <Route exact path="/" component={Home} />
      </Switch>   
    </Router>
  );
}

export default App;
