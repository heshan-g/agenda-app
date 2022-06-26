import React, { useState } from 'react';
import CreateAgendaModal from './CreateAgendaModal';
import { Agenda } from './Board';

interface SidebarProps {
  createAgenda: (agenda: Agenda) => void;
}

const Sidebar = ({ createAgenda }: SidebarProps) => {
  const [showCreateAgendaModal, setShowCreateAgendaModal] = useState(false);

  const openModal = () => setShowCreateAgendaModal(true);
  const closeModal = () => setShowCreateAgendaModal(false);

  return (
    <div>
      <button onClick={openModal}>+ New</button>
      <button>Import</button>
      <button>Export</button>

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

export default Sidebar;
