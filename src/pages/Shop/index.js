import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Carrinho() {
  return (
    <>
    <h1>Seu carrinho</h1>

    <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <Fab aria-label="phone" sx={{bgcolor: '#73b115', position: 'absolute', right: 0, bottom: 0}}>
            <PhoneIcon/>
          </Fab>
        </Box>
    </>
      );
    }
