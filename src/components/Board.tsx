import React, { useState } from 'react';
import AgendaCard from './AgendaCard';
import Sidebar from './Sidebar';

interface Agenda {
  title: string;
  description: string;
  status: string;
  dateTime: Date;
}

const Board = () => {
  const [agendas, setAgendas] = useState<Agenda[]>([
    // test data:
    {
      title: 'Status Meeting',
      description: 'A meeting to discuss the current status of things',
      status: 'Confirmed',
      dateTime: new Date('2022-06-27 12:00'),
    },
  ]);

  return (
    <div>
      <Sidebar />
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
