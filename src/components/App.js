import React from 'react';
import CompanyDetails from './CompanyDetails';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppBar from './AppBar';
import CompanyTiles from './CompanyTiles';

function App() {
  return (
    <Router>
      <AppBar />
      <Route path="/tiles" component={CompanyTiles} />
      <Route path="/add" component={CompanyDetails} />
    </Router>
  );
}

export default App;
