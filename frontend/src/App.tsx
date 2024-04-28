import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FileList from './FileList';
import DeleteFile from './DeleteFile';
import UpdateFile from './UpdateFile';
import SuccessPage from './SuccessPage';
import logo from './assets/logo.png';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <img src={logo} className="logo" alt="Logo" />
        <h1>Multi File Uploader</h1>
        <Switch>
          <Route path="/" exact component={FileList} />
          <Route path="/deletefile" component={DeleteFile} />
          <Route path="/updatefile" component={UpdateFile} />
          <Route path="/success" component={SuccessPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
