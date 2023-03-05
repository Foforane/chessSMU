import React, { useEffect, useState } from "react";
import Table from '@cloudscape-design/components/table'
import Box from "@cloudscape-design/components/box";
import TableHeader from './header';
import { Chess } from "../interface";
import { getData } from "../utils";
import { columnDefinitions } from "../utils/table-config";


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
    return <>
    <Table
    footer ={<Box textAlign='center'>
    SMU Lichess &copy; {new Date().getFullYear()}
   </Box>}
    columnDefinitions={columnDefinitions}
    items={data}
    selectionType = 'multi'
    trackBy='userName'    
    loading = {loading}
    loadingText = 'Loading Rankings' 
    header = {<TableHeader/>}
    />
    </>
}

export default ChessTable;