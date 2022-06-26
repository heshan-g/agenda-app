import React, { useState } from 'react';
import AgendaCard from './AgendaCard';
import Header from './Header';
import { Typography } from '@mui/material';
import { ExportToCsv } from 'export-to-csv';

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

  const exportAgendas = () => {
    const csvExporter = new ExportToCsv({
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
    });

    csvExporter.generateCsv(agendas);
  };

  let dateGroup: string;
  let showDateGroup: boolean = true;

  return (
    <div>
      <Header createAgenda={createAgenda} exportAgendas={exportAgendas} />
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
