import React  , { useState, useEffect } from "react";

import Table from "./Table";

//Estilizacao visualizacao Da Lista
import styles from '../styles/ListView.module.scss'

import axios from "axios";



export const ListView = () => {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
          const result = await axios.get('https://api.airtable.com/v0/app6wyVEK4ZQbbAzm/Produtos',{
            headers: {
                Authorization: 'Bearer key83wTk6Qka7Kibs',
            },
          });
          setData(result.data);
          console.log(data)
        })();
      }, []);
    

    return (
        <>
            <div className="ListTable">
                <table></table>
            </div>
        </>
    )
}