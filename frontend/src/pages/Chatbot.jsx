import React, { useState } from 'react';

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
    // Append prompt to limit response to 50 words
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
              parts: [{ text: prompt }]
            }
          ]
        }),
      }
    );

    const data = await response.json();
    const fullReply = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response received';
    const replyText = fullReply.split(' ').slice(0, 50).join(' ') + (fullReply.split(' ').length > 50 ? '...' : '');

    setConversation(prev => [...prev, { role: 'bot', text: replyText }]);
  } catch (error) {
    setConversation(prev => [...prev, { role: 'bot', text: 'Error: ' + error.message }]);
  }

  setUserInput('');
  setLoading(false);
};


  return (
    <div className="max-w-xl mx-auto p-4 bg-[#1e1e2f] text-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4 text-center text-white">Gemini Chatbot</h1>
      <div className="h-80 overflow-y-auto border border-gray-700 p-2 mb-4 bg-[#2a2a3b] rounded">
        {conversation.map((msg, idx) => (
          <div key={idx} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg max-w-xs break-words ${
              msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white'
            }`}>
              {msg.text}
            </span>
          </div>
        ))}
        {loading && <p className="text-center text-gray-400">Loading...</p>}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border border-gray-600 bg-[#1e1e2f] text-white px-4 py-2 rounded focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Type a message..."
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
