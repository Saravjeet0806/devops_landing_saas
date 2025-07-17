import React, { useState } from 'react';
import { Bot, User } from 'lucide-react';

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!userInput.trim()) return;

    const newMessage = { role: 'user', text: userInput };
    setConversation(prev => [...prev, newMessage]);
    setLoading(true);

    try {
      const prompt = `${userInput.trim()}. Answer in 50 words only.`;

      const response = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-goog-api-key': import.meta.env.VITE_GEMINI_API_KEY,
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: prompt }],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const fullReply = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response received';
      const replyText =
        fullReply.split(' ').slice(0, 50).join(' ') + (fullReply.split(' ').length > 50 ? '...' : '');

      setConversation(prev => [...prev, { role: 'bot', text: replyText }]);
    } catch (error) {
      setConversation(prev => [...prev, { role: 'bot', text: 'Error: ' + error.message }]);
    }

    setUserInput('');
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto pt-10 text-white rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-orange-400 drop-shadow">⚙️ DevOps Chatbot</h1>

      <div className="h-[400px] overflow-y-auto border border-orange-500 p-4 mb-4 rounded space-y-4 bg-[#2a2a40]">
        {conversation.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className="flex items-start gap-2 max-w-[75%]">
              {msg.role === 'bot' && <Bot size={24} className="text-orange-400 mt-1" />}
              {msg.role === 'user' && <User size={24} className="text-orange-400 mt-1" />}
              <span
                className={`p-3 rounded-2xl text-sm leading-relaxed shadow-md transition-all ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-br from-orange-600 to-orange-500 text-white'
                    : 'bg-gray-800 text-white'
                }`}
              >
                {msg.text}
              </span>
            </div>
          </div>
        ))}
        {loading && <p className="text-center text-gray-400">Generating response...</p>}
      </div>

      <div className="flex gap-2 sm:flex-row flex-col items-center sm:items-start">
        <input
          className="flex-1 border border-gray-600 bg-[#1e1e2f] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
          type="text"
          placeholder="Ask anything about DevOps..."
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-orange-500 text-white px-5 py-2.5 rounded-md font-semibold  hover:bg-orange-600 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
