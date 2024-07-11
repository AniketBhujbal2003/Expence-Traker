import React from 'react'
import './Form.css'
import { useState } from 'react';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';

import { useContext } from 'react';
import { ETcontext } from './Context/TransactionCont.jsx';
import { v4 as uuidv4 } from 'uuid';

import { expenseCategories,incomeCategories } from './Constants/Categories.js';
// import formatDate from './utils/formatDate.js';

import CustomSnackbar from './CustomSnackbar.jsx';

let initialState={
  amount:'',
  type: '',
  category: 'Salary',
  date: new Date()
}

const Form = () => {
  
  

  let [formData, setFormdata] = useState(initialState);
  let [open,setOpen] = useState(false);

  let handleType=(event)=>{
      setFormdata({...formData,type: event.target.value});
  }

  let handleCategory=(event)=>{
    setFormdata({...formData,category: event.target.value});
  }

  let handleAmount=(event)=>{
    setFormdata({...formData,amount: event.target.value});
  }

  let handleDate=(event)=>{
    setFormdata({...formData,date: event.target.value});
  }
  
  const {addTransaction} = useContext(ETcontext);

  let createTransaction=()=>{
      if(Number.isNaN(Number(formData.amount)) || !formData.date.includes('-')) return;
      let transaction = {...formData,amount: Number(formData.amount),id: uuidv4()}
      
      setOpen(true);
      addTransaction(transaction);
      setFormdata(initialState);
  }

  let seletedCategories= (formData.type=='Income'? incomeCategories: expenseCategories);

  return (
    <div>
        <CustomSnackbar open={open} setOpen={setOpen}/>
        <Grid container spacing={2}>

             <Grid item xs={12}>
                    <Typography align='center' variant='subtitle2' gutterBottom gutterUp> 
                        ....
                    </Typography>
             </Grid>

             <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                   <Select label='Type' value={formData.type} onChange={handleType}>
                       <MenuItem value='Income'>Income</MenuItem>
                       <MenuItem value='Expence'>Expence</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth>
                     <InputLabel>Category</InputLabel>
                     <Select label='Category' value={formData.category} onChange={handleCategory} >
                         
                          {
                            seletedCategories.map((c)=>{
                              return <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>
                            })
                          }
                     </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
                 <TextField type='number' variant='outlined' label='Amount' value={formData.amount} onChange={handleAmount} fullWidth></TextField>
            </Grid>

            <Grid item xs={6}>
                  <TextField type='date' variant='outlined' value={formData.date}   onChange={handleDate} fullWidth></TextField>
            </Grid>
            
            <Button id='Btn' variant='outlined' onClick={createTransaction} fullWidth>Create</Button>
          

        </Grid>
        
       
        
    </div>
  )
}

export default Form