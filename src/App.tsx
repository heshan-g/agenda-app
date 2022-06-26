import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Board from './components/Board';

const App = () => {
  return (
    <Container maxWidth='sm'>
      <Box sx={{ my: 4 }}>
        <Board />
      </Box>
    </Container>
  );
};

export default App;
