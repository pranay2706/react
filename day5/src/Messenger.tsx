import React, { useState } from "react";
import Chat from "./Chat";
import ContactList from "./ContactList";

interface Contact {
  id: number;
  name: string;
  email: string;
}

const contacts: Contact[] = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

const Messenger: React.FC = () => {
  const [to, setTo] = useState<Contact>(contacts[0]);

  const handleSelectContact = (contact: Contact) => {
    setTo(contact);
  };

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={handleSelectContact}
      />
      <Chat key={to.id} contact={to} />
    </div>
  );
};

export default Messenger;
