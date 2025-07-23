import React, { useState } from 'react';

const mockMessages = [
  { sender: 'user', text: 'How did the recent milk procurement volumes influence our Q2 revenue overall?' },
  { sender: 'bot', text: 'In Q2 FY25, milk procurement rose by 4% to 335 lakh liters daily, boosting liquid milk revenue by 8%, which contributed ₹450 crore to overall revenue growth. However, supply delays in the Northeast caused a 2% drop in ice cream sales, partially offsetting gains.' },
];

const watsonxLogo = (
  <img
    src="/watsonx2.svg"
    alt="watsonx Orchestrate Logo"
    className="h-6 w-auto ml-2"
    style={{ display: 'inline-block', verticalAlign: 'middle' }}
  />
);

const ChatWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Icon Button */}
      {!open && (
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg focus:outline-none transition-transform duration-200 hover:scale-105"
          onClick={() => setOpen(true)}
          aria-label="Open chat"
        >
          {/* Chat bubble icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 19.5h6.75m-10.5-3.75V6.75A2.25 2.25 0 017.125 4.5h9.75a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-2.25l-3 3-3-3h-2.25a2.25 2.25 0 01-2.25-2.25z" />
          </svg>
        </button>
      )}
      {/* Chat Window */}
      {open && (
        <div className="w-80 max-w-[90vw] h-96 bg-white rounded-2xl shadow-2xl flex flex-col mt-4 overflow-hidden border border-gray-200 animate-fade-in transition-all duration-300">
          <div className="flex items-center justify-between px-4 py-3 bg-blue-600 text-white">
            <div className="flex items-center gap-2">
            <span className="text-xs font-light opacity-60 flex items-center">{watsonxLogo}</span>
              <span className="font-semibold text-base">Agentic Chat</span>
              
            </div>
            <button
              className="ml-2 p-1 rounded-full hover:bg-blue-500 focus:outline-none transition-colors"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              {/* X icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-gray-50 custom-scrollbar">
            {mockMessages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`px-4 py-2 rounded-2xl max-w-xs text-xs shadow-md transition-colors duration-200 ${
                    msg.sender === 'user'
                      ? 'bg-blue-500 text-white rounded-br-md'
                      : 'bg-gray-200 text-gray-900 rounded-bl-md'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t bg-white">
            <input
              type="text"
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all text-xs"
              placeholder="Type a message... (demo only)"
              disabled
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget; 