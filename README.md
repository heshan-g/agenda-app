# The Agenda App

A simple React JS application for creating and managing meeting agendas.

## Getting started

1. `npm install` to install dependencies.
1. `npm start` to start running in the development environment.
1. Visit `http://localhost:3000/` on your browser.

## Using the app

### Adding a new agenda

1. Click on the `+ New` button at the top-right to begin creating an agenda
1. A modal will appear for you to type in the details of the new agenda
1. Type in a `Title` and `Description`
1. Select a `Status` from the dropdown menu
1. Select the `Date and Time` from the date-picker
1. Click on `Create Agenda` to create a new agenda

### Managing existing agendas

1. Agendas will show up as "cards" as they are being created
1. Agendas will be grouped by date and the group and the earliest dates will show up at the top
1. To update an agenda, click the `EDIT` button in the card
1. To delete an agenda, click the `DELETE` button in the card

### Exporting agendas

1. Click on `EXPORT` at the top-left to download a CSV file of all the agendas

### Importing agendas

1. Click on `IMPORT` at the top-left to begin the importing process
1. Click on `UPLOAD` to select a CSV file to upload
1. Click on `IMPORT AGENDAS` to create agendas using the uploaded file
1. Error messages are displayed if the import fails
    - NOTE: an empty line at the end of file will cause the import to fail

