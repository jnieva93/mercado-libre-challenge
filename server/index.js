const express = require('express');
const path = require('path');
const service = require('./service/service');

const PORT = process.env.PORT || 3001;

const app = express();

// Serve the files for the built React App
app.use(express.static(path.join(__dirname, '../client/build')));

// Handle search requests
app.get('/api/items/search=:query', (req, res) => {
  const query = req.params.query;

  service.searchItems(query)
    .then(searchData => res.json(searchData))
    .catch(error => res.status(error.response.status).send({ error: error.response.data }));
});

// Handle item data requests
app.get('/api/items/:itemId', (req, res) => {
  const itemId = req.params.itemId;

  service.getItemDetails(itemId)
    .then(itemData => res.json(itemData))
    .catch(error => res.status(error.response.status).send({ error: error.response.data }));
});

// All other requests not handled before will return the React app
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
