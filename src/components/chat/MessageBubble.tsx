import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { cn } from "@/lib/utils";

interface MessageBubbleProps {
  message: string;
  timestamp: string;
  isCurrentUser?: boolean;
  userName?: string;
  userAvatar?: string;
}

const MessageBubble = ({
  message = "Hello! This is a sample message.",
  timestamp = new Date().toLocaleTimeString(),
  isCurrentUser = false,
  userName = "User",
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=default",
}: MessageBubbleProps) => {
  return (
    <div
      className={cn(
        "flex w-full max-w-[600px] gap-3 mb-4",
        isCurrentUser ? "flex-row-reverse ml-auto" : "mr-auto",
      )}
    >
      <Avatar className="h-8 w-8">
        <AvatarImage src={userAvatar} alt={userName} />
        <AvatarFallback>{userName[0]}</AvatarFallback>
      </Avatar>

      <div className="flex flex-col">
        <div
          className={cn(
            "rounded-lg px-4 py-2 max-w-sm break-words",
            isCurrentUser ? "bg-primary text-primary-foreground" : "bg-muted",
          )}
        >
          <p className="text-sm">{message}</p>
        </div>
        <span className="text-xs text-muted-foreground mt-1">{timestamp}</span>
      </div>
    </div>
  );
};

export default MessageBubble;
