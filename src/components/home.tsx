import React from "react";
import ChatContainer from "./chat/ChatContainer";
import DummyComponent from "./chat/ChatInput";

const Home = () => {
  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Main chat area */}
      <div className="flex-1 overflow-hidden">
        <ChatContainer />
      </div>

      {/* Fixed input area at bottom */}
      <div className="border-t">
        <DummyComponent />
      </div>
    </div>
  );
};

export default Home;
