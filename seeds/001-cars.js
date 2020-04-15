
exports.seed = async function (knex) {

  const carData = [
    { VIN: '234lkjh23lkj4', make: 'toyota', model: 'camry', mileage: 1834 },
    { VIN: 'cl23jyl2kj342', make: 'honda', model: 'accord', mileage: 342 },
    { VIN: 'd23nlkwer9234', make: 'acura', model: 'tsx', mileage: 3 },
    { VIN: '23l3k3dfjhwle', make: 'lexus', model: 'GS', mileage: 64433 }
  ]

  await knex('cars').truncate();

  return knex('cars').insert(carData);
};



