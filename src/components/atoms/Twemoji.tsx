import React from "react";
import twemoji from "twemoji";

interface TwemojiProps {
  icon: string;
}

const Twemoji: React.FC<TwemojiProps> = ({ icon }) => {
  return (
    <div
      className="flex rounded-md w-10 h-10"
      dangerouslySetInnerHTML={{ __html: twemoji.parse(icon)! }}
    />
  );
}

export default Twemoji;
