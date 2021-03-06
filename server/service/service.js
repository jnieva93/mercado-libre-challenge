const axios = require('axios');

const apiMeLi = 'https://api.mercadolibre.com';

const authorData = {
  name: 'José Adán',
  lastname: 'Nieva'
};

exports.searchItems = query => {
  return axios.get(`${apiMeLi}/sites/MLA/search?q=${query}&limit=4`)
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
            currency: result.currency_id,
            amount: Math.trunc(result.price),
            decimals: Math.trunc(result.price % 1 * 100)
          },
          picture: result.thumbnail,
          condition: result.condition,
          free_shipping: result.shipping.free_shipping,
          // Is needed for the result page
          location: result.address.state_name
        }))
      };

      return searchData;
    });
}

exports.getItemDetails = itemId => {
  // I use Promise.all because axios.all is deprecated
  return Promise.all([
    axios.get(`${apiMeLi}/items/${itemId}`),
    axios.get(`${apiMeLi}/items/${itemId}/description`)
  ])
    .then(responses => {
      const itemResp = responses[0].data;
      const descResp = responses[1].data;
      const categoryId = itemResp.category_id;

      return axios.get(`${apiMeLi}/categories/${categoryId}`)
        .then(categoryResponse => {
          const categoryArray = categoryResponse.data.path_from_root;
          let formattedCateg = [];

          if (categoryArray.length) {
            formattedCateg = categoryArray.map(category => category.name);
          }

          const itemData = {
            author: authorData,
            item: {
              id: itemResp.id,
              title: itemResp.title,
              price: {
                currency: itemResp.currency_id,
                amount: Math.trunc(itemResp.price),
                decimals: Math.trunc(itemResp.price % 1 * 100)
              },
              // If a pic with a better resolution exists, use it
              picture: itemResp.pictures.length ? itemResp.pictures[0].url : itemResp.thumbnail,
              condition: itemResp.condition,
              free_shipping: itemResp.shipping.free_shipping,
              sold_quantity: itemResp.sold_quantity,
              description: descResp.plain_text,
              categories: formattedCateg
            }
          };
    
          return itemData;
        });
    });
}
