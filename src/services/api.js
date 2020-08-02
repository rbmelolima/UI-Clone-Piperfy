export function loadLists() {
  return [
    {
      id: 0,
      title: 'Tarefas',
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Concluir projeto que recria a interface do piperfy',
          labels: [ '#7159c1' ],
          user: 'https://avatars3.githubusercontent.com/u/48859060?s=460&u=2c3bdd59585c0ed134934d2ab50e025c4932141d&v=4'
        },
        {
          id: 2,
          content: 'Subir projeto no github',
          labels: [ '#7159c1' ],
          user: 'https://avatars3.githubusercontent.com/u/48859060?s=460&u=2c3bdd59585c0ed134934d2ab50e025c4932141d&v=4'
        },
        {
          id: 3,
          content: 'Estudar módulo 03 de React Native',
          labels: [ '#7159c1' ],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 4,
          content: 'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
          labels: [ '#54e1f7' ],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 5,
          content: 'Gravar testes e deploy ReactJS',
          labels: [ '#54e1f7' ],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
      ]
    },
    {
      id: 1,
      title: 'Fazendo',
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Recriando clone do Pipefy',
          labels: [],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        }
      ]
    },
    {
      id: 2,
      title: 'Pausado',
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Gravar sobre Geolocalização e mapas com React Native',
          labels: [ '#7159c1' ],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 8,
          content: 'Gravar testes e deploy ReactJS',
          labels: [ '#54e1f7' ],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 9,
          content: 'Ajustes na biblioteca unform',
          labels: [],
        }
      ]
    },
    {
      id: 3,
      title: 'Concluído',
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Gravar aula sobre deploy e CI com React Native',
          labels: [],
        },
        {
          id: 12,
          content: 'Gravar testes e deploy ReactJS',
          labels: [ '#54e1f7' ],
        },
        {
          id: 13,
          content: 'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
          labels: [ '#7159c1' ],
        }
      ]
    },
  ];
}