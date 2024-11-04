"use client"
// Navbar.tsx
import Link from 'next/link';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'grey.900' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          AI Text-Speech 
        </Typography>
        <Box>
          <Link href="https://github.com/Alipraiz50" passHref>
            <Button color="inherit">Github</Button>
          </Link>
          
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

