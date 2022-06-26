import React from 'react';

interface AgendaCardProps {
  index: number;
  title: string;
  description: string;
  status: string;
  dateTime: Date;
  deleteAgenda: (index: number) => void;
}

const AgendaCard = ({
  index,
  title,
  description,
  status,
  dateTime,
  deleteAgenda,
}: AgendaCardProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>{description}</div>
      <div>Status: {status}</div>
      <div>Date/Time: {dateTime.toTimeString()}</div>
      <button onClick={() => deleteAgenda(index)}>Delete</button>
    </div>
  );
};

export default AgendaCard;
