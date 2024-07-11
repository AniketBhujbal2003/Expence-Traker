
import "./App.css"
import Details from "./Details.jsx";
import Grid from '@mui/material/Grid';
import Middle from "./Middle.jsx";

import './App.css'

function App(){
  return(
    <div>
        <Grid container spacing={0} alignItems='center' justify='center' style={{height: "100vh"}}>
             <Grid item xs={12} sm={4} className="mobile"  >
                  <Details title="Income" className='ht' />
             </Grid>
             <Grid item xs={12} sm={4}>
                  <Middle></Middle>
             </Grid>
             <Grid item xs={12} sm={4} className="desktop" >
                  <Details title="Income"/>
             </Grid>
             <Grid item xs={12} sm={4}>
                  <Details title="Expence"/>
             </Grid>
        </Grid>
    </div>
  )
}

export default App
