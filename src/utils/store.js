import React, { useState, useEffect, Component } from 'react';
import axios from 'axios'



 
      const data1 =  axios.create({
        baseUrl: 'http://localhost:3000/boards',

      })
     


const cards = [
  {
    id: 'card-1',
    title: 'Contratar um Front-End Engineer',
  },
  {
    id: 'card-2',
    title: 'Agendar as entrevistas',
  },
  {
    id: 'card-3',
    title: 'Coisas para fazer',
  },
];

const data = {
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'A INICIAR',
      cards,
    },
    'list-2': {
      id: 'list-2',
      title: 'ANDAMENTO',
      cards,
    },
    'list-3': {
      id: 'list-3',
      title: 'ATRASADO',
      cards: [],
    },
    'list-4': {
      id: 'list-4',
      title: 'CONCLUÍDO',
      cards,
    },
  },
  listIds: ['list-1', 'list-2', 'list-3', 'list-4'],
};


//export default data;




const data4 = axios.create({
    baseURL: 'http://localhost:3000/boards'
})

export default data




