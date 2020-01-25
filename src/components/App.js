import React from 'react';
import AddCompany from './AddCompany';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppBar from './AppBar';
import CompanyTiles from './CompanyTiles';
import Home from './Home';

function App() {
  return (
    <Router>
      <AppBar />
      <Route exact path="/" component={Home} />
      <Route path="/tiles" component={CompanyTiles} />
      <Route path="/add" component={AddCompany} />
    </Router>
  );
}

export default App;
