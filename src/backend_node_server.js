const Users = require('../src/models/user.js');
const Admins = require('../src/models/admin.js');
const Menu = require('./models/Menu.js');
const MealPlans = require('./models/mealPlans.js');
const Wallets = require('./models/wallet.js');
const Orders = require('./models/Orders.js');

const { MongoClient, ObjectId, Binary } = require('mongodb');
const uri = '';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

mongoose.connect('', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Mongoose connected');
    console.log('Connected to MongoDB');

  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

client.connect((err) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  console.log('Mongo client connected');
  console.log('Connected to MongoDB');
  client.close();
});


const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});