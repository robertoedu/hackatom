import React, { useState, useEffect } from "react";

import Table from "./Table";

//Estilizacao visualizacao Da Lista
import styles from '../styles/ListView.module.scss'

import axios from "axios";



 const ListView = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {

            const result = await axios.get('https://api.airtable.com/v0/app6wyVEK4ZQbbAzm/Produtos', {
                headers: {
                    Authorization: 'Bearer key83wTk6Qka7Kibs',
                },

            });

            let listaData = result.data.records
            
            setData(listaData);

            console.log(listaData)
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

export default ListView;