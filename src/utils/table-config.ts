import React from "react";
import { Chess } from "../interface";
import { TableProps } from "@cloudscape-design/components/table";

export const paginationLabels = {
    nextPageLabel: 'Next page',
    pageLabel: (pageNumber : number) => `Go to page ${pageNumber}`,
    previousPageLabel: 'Previous page',
  };

export const columnDefinitions : TableProps.ColumnDefinition<Chess>[] = [
   
    {
        id : 'rank',
        header : 'Rank',
        width : 10,
        cell : item => item.rank
      },
    {
  id : 'surname',
  header : 'Surname',
  width : 70,
  cell : item => item.surname  
},
{
    id:'name',
    header : 'Name',
    width : 70,
    cell : item => item.name
},
{
    id:'blitz',
    header : 'Blitz',
    width : 50,
    cell : item => item.blitz.rating
},
{
    id:'bullet',
    header : 'Bullet',
    width : 50,
    cell : item => item.bullet
},
{
    id:'rapid',
    header : 'Rapid',
    width : 50,
    cell : item => item.rapid
},
{
    id:'gender',
    header : 'Section',
    width : 70,
    cell : item => item.gender
},
{
    id:'phoneNumber',
    header : 'Phone Number',
    width : 70,
    cell : item => {
        
       return "+27"+ item.phoneNumber}
},
{
    id:'UserName',
    header : 'Username',
    width : 70,
    cell : item => item.userName
},
] ; 