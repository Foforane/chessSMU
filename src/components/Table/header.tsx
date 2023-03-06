import React from "react";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import {useNavigate} from 'react-router-dom';
import { Chess } from "../../interface";
export interface HeaderProps{
data : Chess[];
}

function TableHeader({data} : HeaderProps) 
{
  const navigate = useNavigate();
  return (
    <Header
      variant="h2"
      description = 'See how you rank against other SMU Players'
      actions={
        <SpaceBetween direction="horizontal" size='m'>
          <Button disabled>Compare Players</Button>
          <Button disabled ={data.length === 0} onClick={()=>{
              navigate('/stats',{state : {data : data}  })
          }} variant="primary">
            View Stats
          </Button>
        </SpaceBetween>
      }

    >
      SMU Chess
    </Header>
  );
}
export default TableHeader;