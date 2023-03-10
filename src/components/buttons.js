import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export function Buttons(){
    return( <div className="content">
        <h1 className="main-header">Buttons</h1>
        <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    </div>
        
    )
}