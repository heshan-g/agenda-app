import React, { useState } from 'react';
import CreateAgendaModal from './CreateAgendaModal';
import { Agenda } from './Board';
import { Grid, Button } from '@mui/material';

interface HeaderProps {
  createAgenda: (agenda: Agenda) => void;
}

const Header = ({ createAgenda }: HeaderProps) => {
  const [showCreateAgendaModal, setShowCreateAgendaModal] = useState(false);

  const openModal = () => setShowCreateAgendaModal(true);
  const closeModal = () => setShowCreateAgendaModal(false);

  return (
    <div>
      <Grid container justifyContent='space-between' spacing={2}>
        <Grid item>
          <Button variant='outlined'>Import</Button>
          <Button onClick={() => {}} sx={{ ml: 2 }} variant='outlined'>
            Export
          </Button>
        </Grid>
        <Grid item>
          <Button variant='contained' onClick={openModal}>
            + New
          </Button>
        </Grid>
      </Grid>

      {showCreateAgendaModal && (
        <CreateAgendaModal
          isOpen={showCreateAgendaModal}
          closeModal={closeModal}
          createAgenda={createAgenda}
        />
      )}
    </div>
  );
};

export default Header;
