const { Client } = require('pg');

const client = new Client({
  user: 'strapi',
  host: 'localhost',
  database: 'strapi_db',
  password: 'T@1234#rss',
  port: 5432,
});

client.connect()
  .then(() => console.log('✅ PostgreSQL connection successful!'))
  .catch(err => console.error('❌ Connection failed:', err.stack))
  .finally(() => client.end());