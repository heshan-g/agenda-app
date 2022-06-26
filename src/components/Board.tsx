import React, { useState } from 'react';
import AgendaCard from './AgendaCard';
import Sidebar from './Sidebar';

export interface Agenda {
  title: string;
  description: string;
  status: string;
  dateTime: Date;
}

const Board = () => {
  const [agendas, setAgendas] = useState<Agenda[]>([]);

  const createAgenda = (agenda: Agenda) => {
    const updatedAgendasSortedByDate = [...agendas, agenda].sort((a, b) => {
      if (a.dateTime < b.dateTime) return -1;
      if (a.dateTime > b.dateTime) return 1;
      return 0;
    });

    setAgendas(updatedAgendasSortedByDate);
  };

  return (
    <div>
      <Sidebar createAgenda={createAgenda} />
      <div>
        {agendas.map((agenda, index) => (
          <AgendaCard
            key={index}
            title={agenda.title}
            description={agenda.description}
            status={agenda.status}
            dateTime={agenda.dateTime}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
