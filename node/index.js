const express = require('express');
const exphbs = require('express-handlebars');

const db = require('./lib/db');
const randomName = require('./lib/randomName');

db.createPeopleTable();

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', async (_, res) => {
  const name = randomName();
  await db.insertPeople(name);

  const people = await db.selectPeople();

  return res.render('index', { people: people.map(({ name }) => name) });
});

app.listen(3000, () => {
  console.log('Listening on port 3000! ✔️')
});
