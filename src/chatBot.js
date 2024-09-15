import React, { useState, useEffect } from 'react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Auto-open chatbot after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4">
      {/* Chatbot Toggle Button */}
      <button 
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg"
        onClick={toggleChat}
      >
        Chat
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="bg-white border shadow-lg rounded-lg w-72 h-96 p-4 mt-2">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">ChatBot</h3>
            <button 
              className="text-red-500" 
              onClick={toggleChat}
            >
              X
            </button>
          </div>
          <div className="mt-4 flex flex-col h-72 overflow-y-auto">
            {/* Chatbot messages */}
            <div className="bg-gray-200 p-2 rounded mb-2">
              Hi! How can I help you today?
            </div>
            {/* More messages can be dynamically added here */}
          </div>
          {/* Chatbot Input */}
          <div className="mt-auto">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
