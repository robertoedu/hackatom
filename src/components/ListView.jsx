import React, { useMemo, useState, useEffect } from "react";

import Table from "./Table";

//Estilizacao visualizacao Da Lista
// import styles from '../styles/ListView.module.scss'

import axios from "axios";




function ListView() {

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

    const columns = useMemo(
        () =>
            [
                {
                    // first group - TV Show
                    Header: "TV Show",
                    // First group columns
                    columns: [
                        {
                            Header: "Name",
                            accessor: "show.name"
                        },
                        {
                            Header: "Type",
                            accessor: "show.type"
                        }
                    ]
                },
                
                {
                    // Second group - Details
                    Header: "Details",
                    // Second group columns
                    columns: [
                      {
                        Header: "Language",
                        accessor: "show.language"
                      },
                      {
                        Header: "Genre(s)",
                        accessor: "show.genres"
                      },
                      {
                        Header: "Runtime",
                        accessor: "show.runtime"
                      },
                      {
                        Header: "Status",
                        accessor: "show.status"
                      }
                    ]
                  }

            ], []
    );

    return (
        <>
            <div className="ListTable">
                <Table columns={columns} data={data} />
            </div>
        </>
    )
}



export default ListView;