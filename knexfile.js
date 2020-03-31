// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/car-dealer.db3'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};


// 7. do migrations creation, but then change the db to 'market' instead of 'produce'  -- line 8 there
// we will create a 'market' db next 
// 8. run knex migrate:latest and it will automatically create a new db called market.db3 inside 'data'
// this is for Sqlite3 only...for Postgrest, must create a new table first
// every change 
// 9. can do new migration with knex migrate:make name
// 10. all schema change should be done with migrations

// module.exports = {

//   development: {
//     client: 'sqlite3', // db driver
//     connection: {
//       filename: './data/market.db3' // path is from root, not from file we're in, so only one dot/. is needed
//     }, // could be an object or a string
//     useNullAsDefault: true, // only needed for SQLite
//   },