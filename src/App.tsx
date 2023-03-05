import React from "react";
import ChessTable from "./components/Table/table";
import AppLayOut from '@cloudscape-design/components/app-layout';
import Container from '@cloudscape-design/components/container';
import Box from '@cloudscape-design/components/box';
import Header from '@cloudscape-design/components/header';

function App() {
 

  return (
    <AppLayOut
    toolsHide 
    navigationHide
    content = {<ChessTable/>}
    
    />
  )
}

export default App
