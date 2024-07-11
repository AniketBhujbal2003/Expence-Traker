
import { IntegrationInstructions } from "@mui/icons-material";
import React, { useReducer, useState } from "react";
import { createContext} from "react";

import contextReducer from "./ContextReducer.js";

const initialState= JSON.parse(localStorage.getItem('transaction')) || [
    {
      "amount": 50,
      "type": "Expence",
      "category": "Bills",
      "date": "2024-06-18",
      "id": "9ef41ade-7be2-4aa3-afeb-17206f730de2"
    },
    {
      "amount": 100,
      "type": "Income",
      "category": "Business",
      "date": "2024-06-18",
      "id": "c6ef1a84-2a35-4195-acc2-a361e7d35041"
    }
  ] ;

export const ETcontext= createContext(initialState);

export const ETProvider=(props)=>{

  

    let [transaction,setTransaction] = useState(initialState);

   
    const deleteTransaction=(id)=>{
       let newtrans= transaction.filter((ele)=>{
        return ele.id != id;
       })
       setTransaction(newtrans);
       localStorage.setItem('transaction',JSON.stringify(transaction));
    }

    const addTransaction=(trans)=>{
       setTransaction([trans,...transaction]);
       localStorage.setItem('transaction',JSON.stringify(transaction));
    }
    
    console.log(transaction);

    let balance = transaction.reduce((acc,currVal)=> currVal.type=="Income" ? acc+currVal.amount : acc-currVal.amount,0);

    return(
        <ETcontext.Provider value={{
            deleteTransaction,
            addTransaction,
            transaction,
            balance
        }}>
            {props.children}
        </ETcontext.Provider>

    )
}