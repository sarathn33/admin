import { Card, CardContent, Typography } from '@mui/material';

import React from 'react';

export function Others(){
    return(
        <div className='content'>
            <h1 className="main-header">Colors</h1>
            <CardContent>
             <Card>
          <Typography
            variant="contained"
            bgcolor="green"
            component="div"
            className="colors"
          >
            Green
          </Typography>
          </Card>
          
          <br />
          <Card>
          <Typography
            variant="contained"
            bgcolor="red"
            component="div"
            className="colors"
          >
            Red
          </Typography>
          </Card>
          
          <br />
          <Card>
          <Typography
            variant="contained"
            bgcolor="yellow"
            component="div"
            className="colors"
          >
            Yellow
          </Typography>
          </Card>
          
          <br />
          <Card>
          <Typography
            variant="contained"
            bgcolor="blue"
            component="div"
            className="colors"
          >
            Blue
          </Typography>
          </Card>
          
          <br />
          <Card>
          <Typography
            variant="contained"
            bgcolor="pink"
            component="div"
            className="colors"
          >
            Pink
          </Typography>
          </Card>
         
         
        </CardContent>

        </div>
    )
} 