const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
const lawsRoutes = require('./routes/laws');
const casesRoutes = require('./routes/cases');
const chatbotRoutes = require('./routes/chatbot');

app.use('/api/auth', authRoutes);
app.use('/api/laws', lawsRoutes);
app.use('/api/cases', casesRoutes);
app.use('/api/chatbot', chatbotRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'LexPortal Backend Running!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});