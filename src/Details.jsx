import React from 'react'

import './Details.css'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import useTransaction from './UseTransaction.js'

import { Doughnut } from 'react-chartjs-2';

import { 
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';


 ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
 )


const Details = ({title="empty"}) => {

  const {total , chartData}= useTransaction(title);
  

 

  return (
    <div>

       <Card className={title}>
           <CardHeader title={title}></CardHeader>
           <CardContent>
                <Typography variant='h5'> &#8377;{total}</Typography>
           </CardContent>
           <Doughnut data={chartData} />
           
       </Card>

    </div>
  )
}

export default Details