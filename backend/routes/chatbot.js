const express = require('express');
const Groq = require('groq-sdk');
const router = express.Router();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

router.post('/', async (req, res) => {
  try {
    const { message } = req.body;

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `You are LexBot, an expert Indian legal assistant for LexPortal. 
          You help citizens, law students, lawyers and judges understand Indian law.
          You are knowledgeable about IPC (Indian Penal Code), CrPC, Constitution of India, 
          civil laws, criminal laws, and legal procedures.
          Always give clear, simple answers. 
          For serious legal matters, always recommend consulting a qualified lawyer.
          Keep responses concise and helpful.`
        },
        {
          role: 'user',
          content: message
        }
      ],
      model: 'llama-3.3-70b-versatile',
      max_tokens: 500
    });

    const reply = completion.choices[0]?.message?.content || 'Sorry, I could not process your request.';
    res.json({ reply });

  } catch (error) {
    res.status(500).json({ message: 'Chatbot error', error: error.message });
  }
});

module.exports = router;