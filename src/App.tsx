import React from "react";
import ChessTable from "./components/Table/table";

import Stats from './components/stats'
import AppLayOut from '@cloudscape-design/components/app-layout';
import { Route,Routes } from "react-router-dom";

function App() {
 

  return (
    <AppLayOut
    toolsHide 
    navigationHide
    content = {
      <Routes>
      <Route path="/" element = {<ChessTable/>}/>
      <Route path="/stats" element ={<Stats />} />
      </Routes>
      
  
  }
    
    />
  )
}

export default App
