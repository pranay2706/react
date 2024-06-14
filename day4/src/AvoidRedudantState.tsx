import { ChangeEvent, useState } from "react";

const AvoidRedudantState = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const fullName: string = firstName + " " + lastName;

  const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setLastName(e.target.value);
  };

  return (
    <>
      <h2>Let’s check you in</h2>
      <label>
        First name: <input value={firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name: <input value={lastName} onChange={handleLastNameChange} />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
};

export default AvoidRedudantState;
