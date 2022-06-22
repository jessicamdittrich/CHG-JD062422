const express = require('express');
const routes = require('./routes');
// REQUIRED SEQUELIZE
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// SYNCED SEQUELIZE MODEL TO DATABASE AND SERVER
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
});
