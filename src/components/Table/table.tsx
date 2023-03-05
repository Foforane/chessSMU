import React, { useEffect, useState } from "react";
import { Pagination } from "@cloudscape-design/components";
import Table from '@cloudscape-design/components/table';
import { useCollection } from '@cloudscape-design/collection-hooks';
import Box from "@cloudscape-design/components/box";
import TableHeader from './header';
import { Chess } from "../../interface";
import { getData } from "../../utils";
import { columnDefinitions,paginationLabels } from "../../utils/table-config";



function ChessTable(){
    const [data , setData] = useState<Chess[]>([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
    getData().then(data => {
        setData(data)
        setLoading(false)
    }
        )
    },[])
   
    const {items, paginationProps,collectionProps } = useCollection(
      data || [],
      {
       
        pagination: { pageSize: 10 },
        sorting: {},
        selection: {},
      }
    );
    return <>
    <Table
    {...collectionProps}
    footer ={<Box textAlign='center'>
    SMU Lichess &copy; {new Date().getFullYear()}
   </Box>}
    columnDefinitions={columnDefinitions}
    items={items}
    selectionType = 'multi'
    trackBy='userName'    
    sortingDisabled
    pagination={<Pagination {...paginationProps} ariaLabels={paginationLabels}  />}
    loading = {loading}
    loadingText = 'Loading Rankings' 
    header = {<TableHeader/>}
    />
    </>
}

export default ChessTable;