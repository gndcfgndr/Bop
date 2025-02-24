import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import MessageBubble from "./MessageBubble";

interface Message {
  id: string;
  message: string;
  timestamp: string;
  userName: string;
  userAvatar: string;
  isCurrentUser: boolean;
}

interface ChatContainerProps {
  messages?: Message[];
  className?: string;
}

const ChatContainer = ({
  messages = [
    {
      id: "1",
      message: "Hey there! How are you?",
      timestamp: "10:00 AM",
      userName: "Alice",
      userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
      isCurrentUser: false,
    },
    {
      id: "2",
      message: "I'm doing great, thanks for asking!",
      timestamp: "10:01 AM",
      userName: "Bob",
      userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob",
      isCurrentUser: true,
    },
    {
      id: "3",
      message: "That's wonderful to hear!",
      timestamp: "10:02 AM",
      userName: "Alice",
      userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
      isCurrentUser: false,
    },
  ],
  className = "",
}: ChatContainerProps) => {
  return (
    <div className={`h-full w-full bg-background ${className}`}>
      <ScrollArea className="h-full w-full p-4">
        <div className="flex flex-col space-y-4">
          {messages.map((message) => (
            <MessageBubble
              key={message.id}
              message={message.message}
              timestamp={message.timestamp}
              userName={message.userName}
              userAvatar={message.userAvatar}
              isCurrentUser={message.isCurrentUser}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ChatContainer;
