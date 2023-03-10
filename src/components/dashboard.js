import {  Card, CardContent, Typography } from "@mui/material";
import  React  from "react";

export function Dashboard(){
    return (
        
      <div >
        <div className="content">
        <h1 className="main-header">Dashboard</h1>
        <CardContent>
          <Card>
            <Typography
              variant="contained"
              bgcolor="whitesmoke"
              component="div"
              className="colors"
            >
              EARNINGS (MONTHLY)
              <br />
              $40,000
            </Typography>
          </Card>
          <br />
          <Card>
          <Typography
            variant="contained"
            bgcolor="whitesmoke"
            component="div"
            className="colors"
          >
            EARNINGS (ANNAUAL)
            <br />
            $215,000
          </Typography>
          </Card>
          <br />
          <Card>
          <Typography
            variant="contained"
            bgcolor="whitesmoke"
            component="div"
            className="colors"
          >
            TASKS <input type="range" name="task" value="50" />
            <br />
            50%
          </Typography>
          </Card>
          <br />
          <Card>
          <Typography
            variant="contained"
            bgcolor="whitesmoke"
            component="div"
            className="projects"
          >

            <header>Projects</header>
            <br />
            <hr />
            <br />
            Server Migration
            <input type="range" name="task" value="20"/>
            20%
            <br />
            <br />
            Sales Tracking
            <input type="range" name="task" value="40" />
            40%
            <br />
            <br />
            Customer Database
            <input type="range" name="task" value="60" />
            60%
            <br />
            <br />
            Payout Details
            <input type="range" name="task" value="80" />
            80%
            <br />
            <br />
            Account Setup
            <input type="range" name="task" value="100" />
            Complete!
          </Typography>
          </Card>
          
          <br />
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
        
      </div>
    );}
