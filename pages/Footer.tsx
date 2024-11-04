// Footer.tsx
import React from 'react';
import { Typography, Box, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box 
      component="footer" 
      sx={{
        width: '100%',
        backgroundColor: 'grey.900',  // Change to a grey color
        color: 'common.white',
        textAlign: 'center',
        padding: '1rem',
        mt: 'auto'
      }}
    >
      <Typography variant="body1" sx={{ mb: 1 }}>
        Experience the Future of Voice with AI Text-to-Speech Solutions
      </Typography>

      <Box display="flex" justifyContent="center" gap={2}>
        <Link href="https://twitter.com" target="_blank" color="inherit" sx={{ textDecoration: 'none' }}>
          Twitter
        </Link>
        <Link href="https://linkedin.com" target="_blank" color="inherit" sx={{ textDecoration: 'none' }}>
          LinkedIn
        </Link>
        <Link href="https://github.com/Alipraiz50" target="_blank" color="inherit" sx={{ textDecoration: 'none' }}>
          GitHub
        </Link>
      </Box>

      <Typography variant="caption" display="block" sx={{ mt: 2 }}>
        © {new Date().getFullYear()} Ali Praise. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
