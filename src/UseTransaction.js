import { useContext } from "react";
import { ETcontext } from "./Context/TransactionCont";

import { incomeCategories,expenseCategories,resetCategories } from "./Constants/Categories";
import { TrendingUpRounded } from "@mui/icons-material";

const useTransaction=(title)=>{
     resetCategories();

     const {transaction}= useContext(ETcontext);
     const transactionsPerType= transaction.filter((t)=>{ return t.type==title; })
     const total = transactionsPerType.reduce((acc,currVal)=> acc += currVal.amount,0)
     const categories= (title=='Income' ? incomeCategories : expenseCategories);

    //  console.log({transactionsPerType,total, categories});

     transactionsPerType.forEach((t)=>{
        let category = categories.find((c)=>{return c.type == t.category});
        category.amount += t.amount;
        // console.log(category);
    
     });

     const filteredCategories = categories.filter((c)=>{return c.amount>0 });

     const chartData={
        datasets: [
            {
                label: title,
                data: filteredCategories.map((c)=> c.amount),
                backgroundColor: filteredCategories.map((c)=> c.color),
                borderColor: filteredCategories.map((c)=> c.color)
            }
        ],
        labels: filteredCategories.map((c)=> c.type),
     }

    //  console.log(charData.labels);

     return { total, chartData};
     
}

export default useTransaction