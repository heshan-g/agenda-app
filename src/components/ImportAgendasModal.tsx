import React, { useState } from 'react';
import { Box, Button, Modal, Typography, FormControl } from '@mui/material';
import { styled } from '@mui/material/styles';
import { usePapaParse } from 'react-papaparse';
import { Agenda } from './Board';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface ImportAgendasModalProps {
  isOpen: boolean;
  closeModal: () => void;
  createAgendas: (agendas: Agenda[]) => void;
}

const ImportAgendasModal = ({
  isOpen,
  closeModal,
  createAgendas,
}: ImportAgendasModalProps) => {
  const [fileContent, setFileContent] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage('');

    if (event.target.files) {
      const fileReader = new FileReader();

      fileReader.onloadend = (e) => {
        const content = e.target?.result as string;
        setFileContent(content);
      };

      fileReader.readAsText(event.target.files[0]);
    }
  };

  const { readString } = usePapaParse();

  const handleSubmit = () => {
    if (!fileContent) {
      setErrorMessage('Invalid or no CSV file');
      return;
    }

    readString(fileContent, {
      worker: true,
      complete: (result) => {
        try {
          const headings = result.data.shift() as string[];
          const agendas = result.data as string[][];

          console.log({ agendas });

          const newAgendas: Agenda[] = agendas.map((agenda) => {
            const titleIndex = headings.findIndex(
              (heading) => heading === 'title'
            );
            const descriptionIndex = headings.findIndex(
              (heading) => heading === 'description'
            );
            const statusIndex = headings.findIndex(
              (heading) => heading === 'status'
            );
            const dateTimeIndex = headings.findIndex(
              (heading) => heading === 'dateTime'
            );

            const newAgenda = {
              title: agenda[titleIndex],
              description: agenda[descriptionIndex],
              status: agenda[statusIndex],
              dateTime: new Date(agenda[dateTimeIndex]),
            };

            if (
              !newAgenda.title ||
              !newAgenda.description ||
              !newAgenda.status ||
              !newAgenda.dateTime
            ) {
              throw new Error();
            }

            return newAgenda;
          });

          createAgendas(newAgendas);
          closeModal();
        } catch (err) {
          console.log(err);
          setErrorMessage('An error occurred. Please clean up CSV.');
        }
      },
    });
  };

  const Input = styled('input')({
    display: 'none',
  });
  return (
    <>
      <Modal
        open={isOpen}
        onClose={closeModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style} component='form'>
          <div>
            <Typography variant='h6' component='h2'>
              Import Agendas (CSV upload)
            </Typography>

            <FormControl fullWidth sx={{ mt: 2 }}>
              <label htmlFor='contained-button-file'>
                <Input
                  accept='text/csv'
                  id='contained-button-file'
                  type='file'
                  onChange={handleUpload}
                />
                <Button variant='outlined' component='span'>
                  Upload
                </Button>
              </label>
              {errorMessage && (
                <Typography variant='subtitle1' sx={{ color: 'red' }}>
                  {errorMessage}
                </Typography>
              )}
            </FormControl>

            <FormControl sx={{ mt: 2 }}>
              <Button onClick={handleSubmit} variant='contained'>
                Import Agendas
              </Button>
            </FormControl>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ImportAgendasModal;
