// routes/gemini.route.js
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/chat', async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-goog-api-key': process.env.GEMINI_API_KEY,
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt + '. Answer in 50 words only.' }] }],
        }),
      }
    );

    const data = await response.json();
    res.json({ text: data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response received' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch from Gemini API' });
  }
});

export default router;
