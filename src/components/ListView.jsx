//Dependencias
import React, { useMemo, useState, useEffect } from "react";
import { Header } from "./Header";
import Table from "./Table";

//Estilizacao visualizacao Da Lista
import styles from '../styles/ListView.module.scss'

import axios from "axios";

function ListView() {

    const [data, setData] = useState([]);

    // Faz o Fetch da Api , e seta os Dados no State.
    useEffect(() => {
        (async () => {

            const result = await axios.get('https://api.airtable.com/v0/app6wyVEK4ZQbbAzm/Produtos', {
                headers: {
                    Authorization: 'Bearer key83wTk6Qka7Kibs',
                },

            });

            let listaData = await result.data.records

            listaData.filter(async () => {

                setData(listaData);

                // listaData = resp
                return true
            })

        })();
    }, [data]);

    //Configuracoes da Tabela
    const columns = useMemo(
        () =>
            [
                {
                    // first group - Dom
                    Header: "Sab.",
                    // First group columns                    
                    columns: [
                        {
                            Header: "07",
                            accessor: "fields.nome",
                            // Cell: ({ cell: { value } }) => <Genres values={value} />
                        },

                    ]
                },
                {
                    // first group - Dom
                    Header: "Dom.",
                    // First group columns                    
                    columns: [
                        {
                            Header: "08",
                            // accessor: "fields.nome"
                        },
                    ]
                },
                {
                    // first group - Dom
                    Header: "Seg.",
                    // First group columns                    
                    columns: [
                        {
                            Header: "09",
                            // accessor: "fields.nome"
                        },
                    ]
                },
                {
                    // first group - Dom
                    Header: "Ter.",
                    // First group columns                    
                    columns: [
                        {
                            Header: "10",
                            // accessor: "fields.nome"
                        },
                    ]
                },
                {
                    // first group - Dom
                    Header: "Qua.",
                    // First group columns                    
                    columns: [
                        {
                            Header: "11",
                            // accessor: "fields.nome"

                        },
                    ]
                },
                {
                    // first group - Dom
                    Header: "Qui.",
                    // First group columns                    
                    columns: [
                        {
                            Header: "12",
                            // accessor: "fields.nome"
                        },
                    ]
                },
                {
                    // first group - Dom
                    Header: "Sex.",
                    // First group columns                    
                    columns: [
                        {
                            Header: "13",
                            // accessor: "fields.nome"
                        },
                    ]
                },

            ], []
    );

    // const Genres = ({ values }) => {
    //     // Loop through the array and create a badge-like component instead of a comma-separated string
    //     return (
    //       <>
    //         {values.map((genre, idx) => {
    //           return (
    //             <span key={idx} className="badge">
    //               {genre}
    //             </span>
    //           );
    //         })}
    //       </>
    //     );
    //   };



    return (
        <>
            <Header />

            <div className={styles.ListTable}>
                <h1 className={styles.h1} > Produtos Cadastrados</h1>
                <Table columns={columns} data={data} />
            </div>
        </>
    )
}

export default ListView;