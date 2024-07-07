// src/components/HeroSection.js
import React, { useState } from 'react';
import { Button, Container, Typography, Box, Grid } from '@mui/material';
import ReferModal from './ReferModal';
import heroImage from '../assets/hero-image.jpg'; // Make sure to add an image in the specified path

const HeroSection = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            bgcolor: 'rgba(255, 255, 255, 0.8)',
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h2" gutterBottom>
            Refer & Earn
          </Typography>
          <Typography variant="h5" paragraph>
            Invite your friends to our courses and earn rewards!
          </Typography>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Refer Now
          </Button>
          <ReferModal open={open} onClose={handleClose} />
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
