const express = require('express');
const axios = require('axios');

const PORT = process.env.PORT || 3001;

const app = express();

const apiMeLi = 'https://api.mercadolibre.com';

const authorData = {
  name: 'José Adán',
  lastname: 'Nieva'
};

/* TO-DO: Modularize both requests. Perhaps create a service folder */
// Handle search requests
app.get('/api/items/search=:query', (req, res) => {
  const query = req.params.query;

  axios.get(`${apiMeLi}/sites/MLA/search?q=${query}&limit=4`)
    .then(response => {
      const filtersArray = response.data.filters;
      let formattedCateg = [];

      if (filtersArray.length) {
        const categoryArray = filtersArray.find(({ id }) => id === 'category');
        formattedCateg = categoryArray.values[0].path_from_root.map(category => category.name);
      }
      
      const searchData = {
        author: authorData,
        categories: formattedCateg,
        items: response.data.results.map(result => ({
          id: result.id,
          title: result.title,
          price: {
            // ASK FOR DECIMALS AND AMOUNT
            currency: result.currency_id,
            amount: result.price,
            decimals: result.price
          },
          picture: result.thumbnail,
          condition: result.condition,
          free_shipping: result.shipping.free_shipping
        }))
      };

      res.json(searchData);
    })
    .catch(error => console.log(error));
});

// Handle item data requests
app.get('/api/items/:itemId', (req, res) => {
  const itemId = req.params.itemId;

  // I use Promise.all because axios.all is deprecated
  Promise.all([
    axios.get(`${apiMeLi}/items/${itemId}`),
    axios.get(`${apiMeLi}/items/${itemId}/description`)
  ])
    .then(responses => {
      const itemResp = responses[0].data;
      const descResp = responses[1].data;

      const itemData = {
        author: authorData,
        item: {
          id: itemResp.id,
          title: itemResp.title,
          price: {
            currency: itemResp.currency_id,
            amount: itemResp.available_quantity,
            decimals: itemResp.price
          },
          picture: itemResp.thumbnail,
          condition: itemResp.condition,
          free_shipping: itemResp.shipping.free_shipping,
          sold_quantity: itemResp.sold_quantity,
          description: descResp.plain_text
        }
      };

      res.json(itemData);
    })
    .catch(error => console.log(error));
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
