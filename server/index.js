const express = require('express');
const axios = require('axios');

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api/items/search=:query', (req, res) => {
  const query = req.params.query;

  axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`)
    .then(response => {
      const filtersArray = response.data.filters;
      let formattedCateg = [];

      if (filtersArray.length) {
        const categoryArray = filtersArray.find(({ id }) => id === 'category');
        formattedCateg = categoryArray.values[0].path_from_root.map(category => category.name);
      }
      
      const searchData = {
        author: {
          name: 'José Adán',
          lastname: 'Nieva'
        },
        categories: formattedCateg,
        items: response.data.results.map(result => ({
          id: result.id,
          title: result.title,
          price: {
            currency: result.currency_id,
            amount: result.price,
            // ASK FOR DECIMALS
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

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
