const express = require('express');
const path = require('path');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client('917937444435-bk64pt8nko9co261h0nffilpbgn7u5ef.apps.googleusercontent.com');

const app = express();
app.use(express.json());

const users = [];

function upsert(array, item) {
  const i = array.findIndex((_item) => _item.email === item.email);
  if (i > -1) array[i] = item;
  else array.push(item);
}

app.post('/api/google-login', async (req, res) => {
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: '917937444435-bk64pt8nko9co261h0nffilpbgn7u5ef.apps.googleusercontent.com',
  });
  const { name, email, picture } = ticket.getPayload();
  upsert(users, { name, email, picture });
  res.status(201);
  res.json({ name, email, picture });
});

app.use(express.static(path.join(__dirname, '/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/build/index.html'))
);

app.listen( 7000, () => {
  console.log(
    "Server is ready at http://localhost: 7000 "
  );
});