import React from "react";
import ChessTable from "./components/table";
import AppLayOut from '@cloudscape-design/components/app-layout'

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
