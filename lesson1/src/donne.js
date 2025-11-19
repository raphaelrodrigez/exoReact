const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connexion à MongoDB - remplacez <password> et myDatabase par vos infos
mongoose.connect('mongodb://localhost:27017/myDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Définition du schema et modèle Mongoose pour un item simple
const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const Item = mongoose.model('Item', itemSchema);

// Routes CRUD

// Lire tous les items
app.get('/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// Créer un item
app.post('/items', async (req, res) => {
  const newItem = new Item(req.body);
  const savedItem = await newItem.save();
  res.json(savedItem);
});

// Mettre à jour un item par id
app.put('/items/:id', async (req, res) => {
  const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedItem);
});

// Supprimer un item par id
app.delete('/items/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: 'Item deleted' });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
