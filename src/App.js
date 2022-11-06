import "bootswatch/dist/darkly/bootstrap.min.css";
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Menubar from './components/Menubar';
import CreateNote from './windows/CreateNote';
import Home from './windows/Home';
import ViewNotes from './windows/ViewNotes';


function App() {
  return (
    <div>
      <Menubar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
    
        <Route path='/viewnotes'>
          <ViewNotes />
        </Route>

        <Route path='/createnote'>
         <CreateNote />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
