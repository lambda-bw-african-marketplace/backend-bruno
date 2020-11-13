exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('products')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          name: 'Rice',
          price: '3.55',
          city: 'Boston',
          category: 'grains',
          description: 'Jasmine Long Grain Rice',
          unit: 'pounds',
          image_url: 'https://tinyurl.com/y6jr6etj',
          user_id: 1,
        },
        {
          name: 'Beans',
          price: '2.99',
          city: 'New York',
          category: 'grains',
          description: 'Pinto Beans',
          unit: 'pounds',
          image_url: 'https://tinyurl.com/y4mqy5xu',
          user_id: 2,
        },

        {
          name: 'Corn',
          price: '10.99',
          city: 'Miami',
          category: 'grains',
          description: 'Sweet Corn',
          unit: 'pounds',
          image_url: 'https://tinyurl.com/y32m4exb',
          user_id: 3,
        },
        {
          name: 'Banana',
          price: '20.25',
          city: 'Dallas',
          category: 'fruit',
          description: 'yellow medium grand naine',
          unit: 'box',
          image_url: 'https://tinyurl.com/y5hjbjkt',
          user_id: 3,
        },
      ])
    })
}
