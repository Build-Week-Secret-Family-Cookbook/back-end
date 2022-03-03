const users = [
  { username: 'allison', password: 'abc' },
  { username: 'christwide', password: '123' }
];

exports.seed = async function (knex) {
  await knex ('users').insert(users);
};