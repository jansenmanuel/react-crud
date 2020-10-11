import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Siswa from './Pages/Siswa';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Siswa} />
      </Switch>
    </Router>
  );
}

export default App;
