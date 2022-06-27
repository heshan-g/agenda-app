import React, { useState } from 'react';
import {
  Box,
  Button,
  Modal,
  Typography,
  FormControl,
  InputLabel,
  Select,
  TextField,
  MenuItem,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Agenda } from './Board';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface CreateAgendaModalProps {
  isOpen: boolean;
  closeModal: () => void;
  createAgendas: (agendas: Agenda[]) => void;
}

const CreateAgendaModal = ({
  isOpen,
  closeModal,
  createAgendas,
}: CreateAgendaModalProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Tentative');
  const [dateTime, setDateTime] = useState(new Date());

  const handleSubmit = () => {
    createAgendas([
      {
        title,
        description,
        status,
        dateTime,
      },
    ]);

    closeModal();
  };

  return (
    <>
      <Modal
        open={isOpen}
        onClose={closeModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style} component='form'>
          <div>
            <Typography variant='h6' component='h2'>
              Create New Agenda
            </Typography>

            <FormControl fullWidth sx={{ mt: 2 }}>
              <TextField
                label='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>

            <FormControl fullWidth sx={{ mt: 2 }}>
              <TextField
                label='Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>

            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel id='status'>Status</InputLabel>
              <Select
                labelId='status'
                value={status}
                label='Status'
                onChange={(e) => setStatus(e.target.value)}
              >
                <MenuItem value='Tentative'>Tentative</MenuItem>
                <MenuItem value='Confirmed'>Confirmed</MenuItem>
                <MenuItem value='Cancelled'>Cancelled</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mt: 2 }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  label='Date of Event'
                  value={dateTime}
                  onChange={(date) => {
                    if (date) {
                      setDateTime(date);
                    }
                  }}
                  renderInput={(params: any) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </FormControl>

            <FormControl sx={{ mt: 2 }}>
              <Button onClick={handleSubmit} variant='contained'>
                Create Agenda
              </Button>
            </FormControl>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default CreateAgendaModal;
