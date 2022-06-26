import React from 'react';

interface AgendaCardProps {
  title: string;
  description: string;
  status: string;
  dateTime: Date;
}

const AgendaCard = ({
  title,
  description,
  status,
  dateTime,
}: AgendaCardProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>{description}</div>
      <div>Status: {status}</div>
      <div>Date/Time: {dateTime.toTimeString()}</div>
    </div>
  );
};

export default AgendaCard;
