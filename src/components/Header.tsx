import React, { useState } from 'react';
import CreateAgendaModal from './CreateAgendaModal';
import { Agenda } from './Board';
import { Grid, Button } from '@mui/material';
import ImportAgendasModal from './ImportAgendasModal';

interface HeaderProps {
  createAgendas: (agendas: Agenda[]) => void;
  exportAgendas: () => void;
}

const Header = ({ createAgendas, exportAgendas }: HeaderProps) => {
  const [showCreateAgendaModal, setShowCreateAgendaModal] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);

  const openCreateModal = () => setShowCreateAgendaModal(true);
  const closeCreateModal = () => setShowCreateAgendaModal(false);

  const openImportModal = () => setShowImportModal(true);
  const closeImportModal = () => setShowImportModal(false);

  return (
    <div>
      <Grid container justifyContent='space-between' spacing={2}>
        <Grid item>
          <Button onClick={openImportModal} variant='outlined'>
            Import
          </Button>
          <Button onClick={exportAgendas} sx={{ ml: 2 }} variant='outlined'>
            Export
          </Button>
        </Grid>
        <Grid item>
          <Button variant='contained' onClick={openCreateModal}>
            + New
          </Button>
        </Grid>
      </Grid>

      {showCreateAgendaModal && (
        <CreateAgendaModal
          isOpen={showCreateAgendaModal}
          closeModal={closeCreateModal}
          createAgendas={createAgendas}
        />
      )}

      {showImportModal && (
        <ImportAgendasModal
          isOpen={showImportModal}
          closeModal={closeImportModal}
          createAgendas={createAgendas}
        />
      )}
    </div>
  );
};

export default Header;
