import React, { useEffect, useState } from "react";
import Table from '@cloudscape-design/components/table'
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
    columnDefinitions={columnDefinitions}
    items={data}
    loading = {loading}
    loadingText = 'Loading Rankings' 
    />
    </>
}

export default ChessTable;