import { Button } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';

export function Nopage(){
    const history=useHistory();
   return (
        <div className='content'>
        <h1 className='main-header'>Nopage</h1>
       <h3>you lost your way </h3>
       <p>Please click the button below to dashboard</p>

        <Button 
        variant="outlined"
        color='primary'
        size='large'
        onClick={()=>history.push('/dashboard')}
        >
            Dashboard
        </Button>
        </div>
    )
}