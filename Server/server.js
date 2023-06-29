const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const userList =[];

const dataSource = [
    {
      key: '1',
      name: 'concepts of physics',
      author: 'H C verma',
      genre: 'physics',
      available_count: 20
    },
    {
        key: '2',
        name: 'mathematical theories',
        author: 'R D sharma',
        genre: 'maths',
        available_count: 21
      },
      {
        key: '3',
        name: 'David CopperField',
        author: 'Charles Dickens',
        genre: 'fiction novel',
        available_count: 10
      },
      {
        key: '4',
        name: 'Ulysses',
        author: 'JamesJoyce',
        genre: 'philosophy',
        available_count: 20
      },
      {
        key: '5',
        name: 'classics',
        author: 'charles dickens',
        genre: 'philosophy',
        available_count: 15
      },
      {
        
          key: '6',
          name: 'fantasy',
          author: 'Ta-nahisls',
          genre: 'fantasy',
          available_count: 23
        },
         {
          
            key: '7',
            name: 'The help',
            author: 'arthur golden',
            genre: 'historical',
            available_count: 27
          },
          {
            key: '8',
            name: 'the haunting',
            author: 'jackson',
            genre: 'fiction',
            available_count: 18
          },
          {
            key: '9',
            name: 'crawdadas sing',
            author: 'delia owens',
            genre: 'philosophy',
            available_count: 28
          },
          {
            key: '10',
            name: 'royal holidays',
            author: 'bareknucckle',
            genre: 'romance',
            available_count: 30
          }
  ];

app.get('/bookdata', (req, res) => {
    res.json({ bookData : dataSource });
});

app.post('/signup',async(req,res) => {
  const {email,password} = req.body;
  console.log(email)
  console.log(password)
})

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});
