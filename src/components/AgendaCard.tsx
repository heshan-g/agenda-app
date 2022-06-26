import React, { useState } from 'react';
import UpdateAgendaModal from './UpdateAgendaModal';
import { Agenda } from './Board';

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

  return (
    <div>
      <h1>{title}</h1>
      <div>{description}</div>
      <div>Status: {status}</div>
      <div>Date/Time: {dateTime.toString()}</div>
      <button onClick={openModal}>Update</button>
      <button onClick={() => deleteAgenda(index)}>Delete</button>

      {showUpdateAgendaModal && (
        <UpdateAgendaModal
          isOpen={showUpdateAgendaModal}
          closeModal={closeModal}
          agenda={{ title, description, status, dateTime }}
          index={index}
          updateAgenda={updateAgenda}
        />
      )}
    </div>
  );
};

export default AgendaCard;
