import React, { useState } from 'react';
import AgendaCard from './AgendaCard';
import Sidebar from './Sidebar';
import { Typography } from '@mui/material';

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

  const deleteAgenda = (index: number) => {
    const updatedAgendas = [...agendas].filter(
      (agenda, agendaIndex) => agendaIndex !== index
    );

    setAgendas(updatedAgendas);
  };

  const updateAgenda = (index: number, newAgenda: Agenda) => {
    const updatedAgendas = [...agendas];
    updatedAgendas[index] = newAgenda;

    setAgendas(updatedAgendas);
  };

  let dateGroup: string;
  let showDateGroup: boolean = true;

  return (
    <div>
      <Sidebar createAgenda={createAgenda} />
      <div style={{ marginTop: '50px' }}>
        {agendas.map((agenda, index) => {
          if (agenda.dateTime.toDateString() !== dateGroup) {
            dateGroup = agenda.dateTime.toDateString();
            showDateGroup = true;
          } else if (showDateGroup) {
            showDateGroup = false;
          }

          return (
            <div>
              {showDateGroup && (
                <Typography variant='h4' component='div'>
                  {agenda.dateTime.toDateString()}
                </Typography>
              )}
              <AgendaCard
                key={index}
                index={index}
                title={agenda.title}
                description={agenda.description}
                status={agenda.status}
                dateTime={agenda.dateTime}
                updateAgenda={updateAgenda}
                deleteAgenda={deleteAgenda}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Board;
