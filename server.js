import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import OpenAI from 'openai';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Static file setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve everything in the root (where index.html, main.js, etc. live)
app.use(express.static(__dirname));

// Route for homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Your API route
app.post('/api/ask', async (req, res) => {
  const { messages } = req.body;

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages,
    });

    res.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error('OpenAI error:', error.response?.data || error.message || error);
    res.status(500).json({ error: 'OpenAI request failed' });
  }
});

app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
