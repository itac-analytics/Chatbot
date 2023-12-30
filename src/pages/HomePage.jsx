import React from 'react';

const Home = () => {
  const recentConversations = Array.from({ length: 11 }, (_, index) => ({
    id: index + 1,
    user: `User ${index + 1}`,
    message: `Conversations and its Description Summary`,
  }));

  return (
    <div className="flex h-screen bg-blue-300">
      <div className="w-1/5 bg-black p-4 border-r border-gray-200 font-mono">
        <p className=''>Your Recent Conversations</p>
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          Recent Conversations
        </h2>
        {recentConversations.map((conversation) => (
          <div key={conversation.id} className="mb-4">
            <span className="font-bold text-gray-700">
              Conversation {conversation.id}:
            </span>
            <p className="text-sm text-blue-200">{conversation.message}</p>
          </div>
        ))}
      </div>

      <div className="flex-1 bg-white p-4">
        <h2 className="text-lg font-semibold mb-4">ChatBar</h2>
      </div>

      <div className="w-1/5 bg-white p-4 border-l border-gray-200">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          Knowledge Base
        </h2>
      </div>
    </div>
  );
};

export default Home;