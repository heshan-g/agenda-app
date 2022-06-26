import React, { useState } from 'react';
import UpdateAgendaModal from './UpdateAgendaModal';
import { Agenda } from './Board';
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Chip,
  Grid,
  Typography,
} from '@mui/material';

interface AgendaCardProps {
  index: number;
  title: string;
  description: string;
  status: string;
  dateTime: Date;
  updateAgenda: (index: number, newAgenda: Agenda) => void;
  deleteAgenda: (index: number) => void;
}

const AgendaCard = ({
  index,
  title,
  description,
  status,
  dateTime,
  updateAgenda,
  deleteAgenda,
}: AgendaCardProps) => {
  const [showUpdateAgendaModal, setShowUpdateAgendaModal] = useState(false);

  const openModal = () => setShowUpdateAgendaModal(true);
  const closeModal = () => setShowUpdateAgendaModal(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Tentative':
        return 'primary';

      case 'Confirmed':
        return 'success';

      case 'Cancelled':
        return 'error';

      default:
        return 'primary';
    }
  };

  return (
    <>
      <Card sx={{ minWidth: 275, my: 4 }} variant='outlined'>
        <CardContent>
          <Grid container justifyContent='space-between' spacing={2}>
            <Grid item>
              <Typography
                sx={{ fontSize: 14 }}
                color='text.secondary'
                gutterBottom
              >
                {dateTime.toString()}
              </Typography>
            </Grid>
            <Grid item>
              <Chip label={status} color={getStatusColor(status)} />
            </Grid>
          </Grid>

          <Typography variant='h5' component='div'>
            {title}
          </Typography>

          <Typography variant='body2'>{description}</Typography>
        </CardContent>
        <CardActions>
          <Button variant='outlined' onClick={openModal} size='small'>
            Edit
          </Button>
          <Button
            variant='outlined'
            onClick={() => deleteAgenda(index)}
            size='small'
            color='error'
          >
            Delete
          </Button>
        </CardActions>
      </Card>

      {showUpdateAgendaModal && (
        <UpdateAgendaModal
          isOpen={showUpdateAgendaModal}
          closeModal={closeModal}
          agenda={{ title, description, status, dateTime }}
          index={index}
          updateAgenda={updateAgenda}
        />
      )}
    </>
  );
};

export default AgendaCard;
