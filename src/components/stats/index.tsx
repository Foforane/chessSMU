import React, {useEffect,useState} from "react";
import PieChart from "@cloudscape-design/components/pie-chart";
import Box from "@cloudscape-design/components/box";
import Cards from "@cloudscape-design/components/cards";
import Button from "@cloudscape-design/components/button";
import Header from "@cloudscape-design/components/header";
import statusIndicator from '@cloudscape-design/components/status-indicator';
import Container from '@cloudscape-design/components/container';
import {useLocation,useNavigate} from 'react-router-dom';
import { Chess } from "../../interface";
import { Link, SpaceBetween } from "@cloudscape-design/components";
function Stats(){
const navigate = useNavigate();
useEffect(()=>{

})
const location = useLocation();
let Chessdata : Chess[] = location.state? location.state.data : [];


useEffect(()=>{
    if(location.state === null) navigate('/')
},[])

const femaleData : Chess[] =Chessdata.filter(item => item.gender === 'Female') 
 const Females : number = femaleData.length;
 const males : number = (Chessdata.filter(item => item.gender === 'Male')).length;
 let highestRating : Chess = Chessdata[0];
 for(const highRating of Chessdata){
    if(highRating.blitz.games>30){
        highestRating = highRating;
        break;
    }
}
 let highestFemaleRating : Chess = femaleData[0];
for(const FemaleRating of femaleData){
    if(FemaleRating.blitz.games>30){
        highestFemaleRating = FemaleRating;
        break;
    }
}

 
return <>
<Container
header = {<Header
    variant="h2"
    description = 'See how you rank against other SMU Players'
    actions={
      <SpaceBetween direction="horizontal" size='m'>
        <Button onClick={()=>{
            navigate('/')
        }} variant="primary">Go Back</Button>
      </SpaceBetween>
    }

  >
    SMU Chess
  </Header>}
footer ={<Box textAlign='center'>
SMU Lichess &copy; {new Date().getFullYear()}
</Box>}
>
    
<PieChart
      data={[
        {
          title: "Males",
          value: males,
          lastUpdate: "March 5 2023"
        },
        {
          title: "Females",
          value: Females,
          lastUpdate: "March 5 2023"
        },
      ]}
      detailPopoverContent={(datum, sum) => [
        { key: "Players", value: datum.value },
        {
          key: "Percentage",
          value: `${((datum.value / sum) * 100).toFixed(
            0
          )}%`
        },
        { key: "Last update on", value: datum.lastUpdate }
      ]}
      segmentDescription={(datum, sum) =>
        `${datum.value} , ${(
          (datum.value / sum) *
          100
        ).toFixed(0)}%`
      }
      i18nStrings={{
        detailsValue: "Value",
        detailsPercentage: "Percentage",
        filterLabel: "Filter displayed data",
        filterPlaceholder: "Filter data",
        filterSelectedAriaLabel: "selected",
        detailPopoverDismissAriaLabel: "Dismiss",
        legendAriaLabel: "Legend",
        chartAriaRoleDescription: "pie chart",
        segmentAriaRoleDescription: "segment"
      }}
      ariaDescription="Pie chart showing how many resources are currently in which state."
      ariaLabel="Pie chart"
      errorText="Error loading data."
      loadingText="Loading chart"
      recoveryText="Retry"
      empty={
        <Box textAlign="center" color="inherit">
          <b>No data available</b>
          <Box variant="p" color="inherit">
            There is no data available
          </Box>
        </Box>
      }
      noMatch={
        <Box textAlign="center" color="inherit">
          <b>No matching data</b>
          <Box variant="p" color="inherit">
            There is no matching data to display
          </Box>
          <Button>Clear filter</Button>
        </Box>
      }
    />
    <br></br>    <br></br>
    <Cards
      cardDefinition={{
        header: item => (
          <Box color='text-status-info' variant='h3'>{item.title}</Box>
        ),
        sections: [
          {
            id: "name",
            header: "Name",
            content: item => item.name
          },
          {
            id: "username",
            header: "User Name",
            content: item => item.username
          },
          {
            id: "rating",
            header: "Rating",
            content: item => item.Rating
          },
          {
            id: "gamesPlayed",
            header: "Games Played",
            content: item => item.games
          },
          {
            id: "gain",
            header: "Current progress",
            content: item => <Box color={item.prog > 0 ? 'text-status-success' : 'text-status-error'}>{item.prog} Points</Box>
          },
          {
            id: "challenge",
            header: "Request Challenge",
            content: item => <Link external href={`https://lichess.org/${item.username}`}>Challenge {item.name}</Link>
          }
        ]
      }}
      items={[
        {
          title: "Best Player",
          name: highestRating.surname + ' ' + highestRating.name,
          username: highestRating.userName,
          Rating : highestRating.blitz.rating,
          games : highestRating.blitz.games,
          prog : highestRating.blitz.prog
        }, 
        {
            title: "Best Female Player",
            name: highestFemaleRating.surname + ' ' + highestFemaleRating.name,
            username: highestFemaleRating.userName,
            Rating : highestFemaleRating.blitz.rating,
            games : highestFemaleRating.blitz.games,
            prog : highestFemaleRating.blitz.prog
            
          }, 
      
      ]}
      header={<Header>Overachievers</Header>}
    />
</Container>
 
</>
}

export default Stats;