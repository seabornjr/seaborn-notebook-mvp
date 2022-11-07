import "bootswatch/dist/darkly/bootstrap.min.css";
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Menubar from './components/Menubar';
import CreateNote from './windows/CreateNote';
import Home from "./windows/Home";
import ViewNotes from './windows/ViewNotes';




function App() {
  const [notes, setNotes] = useState("")
  
  useEffect(() => {
    //const url = "http://localhost:8004/notes";

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:8004/notes");
            const json = await response.json();
            console.log(json);
            setNotes(json);
        } catch (error) {
            console.log("error", error);
        }
    };

    fetchData();
}, []);


  return (
    <div>
      <Menubar />
      <Routes>
        <Route exact path='/' element={<Home/>} >
        </Route>
    
        <Route path='/viewnotes' element={<ViewNotes notes={notes}/>} >
        </Route>

        <Route path='/createnote' element={<CreateNote setNotes={setNotes}/>} >
        </Route>
      </Routes>
    </div>
  );
}



export default App;
