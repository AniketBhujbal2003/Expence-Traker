import React from 'react'
import './MyList.css'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import IconButton from '@mui/material/IconButton';

import Slide from '@mui/material/Slide';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';

import DeleteIcon from '@mui/icons-material/Delete';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import { Category } from '@mui/icons-material';
import { useContext } from 'react';
import { ETcontext } from './Context/TransactionCont';

const MyList = () => {
  
  const {deleteTransaction,transaction}= useContext(ETcontext);
  
  let Transactions=transaction;

  return (
     <List dense={false} className='Mylist'>
         {
           Transactions.map((transaction)=>{
        return <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>

                    <ListItem>

                        <ListItemAvatar>
                              <Avatar id={transaction.type=='Income' ? 'avatarIncome' : 'avatarExpence'}>
                                  <MoneyOffIcon/>
                              </Avatar>
                        </ListItemAvatar>

                        <ListItemText primary={transaction.category} secondary={`Rs.${transaction.amount} -  Date- ${transaction.date}`} />
                        
                        <ListItemSecondaryAction >

                           <IconButton edge='end' aria-label='delte' onClick={()=>{deleteTransaction(transaction.id)}} >

                               <DeleteIcon/>

                           </IconButton>

                        </ListItemSecondaryAction>
                    </ListItem>

               </Slide>
           })
         }
     </List>
  )
}

export default MyList