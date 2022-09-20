import { Box, Typography } from "@mui/material";
import React from "react";

function Serve({name,image}) {


return(
    <Box sx={{
        backgroundColor:'#fde4e4',
        borderRadius:'15px',
        cursor:'pointer',
        px:2,
        py:2,
        width:'20vw',
        transition:'0.4s',
        "&:hover":{
            transform: 'translateY(-15px)'
        }
      

    }}>
         <img src={image}alt="category__item" />
         <Typography>{name}</Typography>
    </Box>
)
  
}

export default Serve;
