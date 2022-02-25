import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem de usuarios');

  response.json([
    'Rafael',
    'Igor',
    'Diniz',
    'Lucas',
  ]);
});

app.listen(3333);
