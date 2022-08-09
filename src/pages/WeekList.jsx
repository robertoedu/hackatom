//Dependencias
import {React, useState} from "react";
import { Header } from "../components/Header";

// import { Calendar, getFilterValuesFromInterval } from '@react-admin/ra-calendar';
// import { List } from 'react-admin';




// function calendar () {
    
//     const [date, setDate]=useState (new Date ());
    
//     return (
//         <>
//         </>

//     ); 

// }




function weekList() {

    const stamp = Date.now();
    const userId = localStorage.getItem("md5");

    console.log(userId)
    console.log(stamp)


    return (
        <>
            
            <Header />
            {/* <List
        filterDefaultValues={getFilterValuesFromInterval()}
        perPage={1000}
        pagination={false}
    >
        <Calendar /> */}
            {/* </List> */}
        </>
    )
}

export default weekList;