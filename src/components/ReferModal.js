import React from 'react';
import { Modal, Box, Typography, IconButton } from '@mui/material';
import { AiOutlineClose } from 'react-icons/ai';
import ReferForm from './ReferForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const ReferModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Refer a Friend</Typography>
          <IconButton onClick={onClose}>
            <AiOutlineClose />
          </IconButton>
        </Box>
        <ReferForm onClose={onClose} />
      </Box>
    </Modal>
  );
};

export default ReferModal;
