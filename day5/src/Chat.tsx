import React, { useState } from "react";

interface Contact {
  name: string;
  email: string;
}

interface ChatProps {
  contact: Contact;
}

const Chat: React.FC<ChatProps> = ({ contact }) => {
  const [text, setText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <section className="chat">
      <textarea
        value={text}
        placeholder={`Chat to ${contact.name}`}
        onChange={handleChange}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
};

export default Chat;
