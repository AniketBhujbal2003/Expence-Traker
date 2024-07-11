
import React from 'react'
import './Middle.css'
import Form from './Form.jsx';
import MyList from './MyList.jsx';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import Grid from '@mui/material/Grid';

import { useContext } from 'react';
import { ETcontext } from './Context/TransactionCont.jsx';

import Inforcard from './Inforcard.jsx';



const Middle = () => {
  
  const {balance} = useContext(ETcontext);
  return (
     <div>
        <Card className='Middle'>
              <CardHeader title="Expence Traker" subheader="Powered by Speechly"/>
              <CardContent>

              <Typography align='centre' variant='h5' >Total Balance is &#8377; {balance}</Typography>
              <Typography variant='subtitle1' style={{lineHeight:'1.5em',marginTop:'20px'}} gutterBottom>
                  <Inforcard></Inforcard>
              </Typography>
              <Divider></Divider>
              
              <Form></Form>
              
              
              </CardContent>

              <CardContent>
                 <Grid container spacing={2}>
                      <Grid item xs={12}>
                           {/* {list} */}
                           <MyList></MyList>
                      </Grid>
                 </Grid>
              </CardContent>
        </Card>
     </div>
  )
}

export default Middle