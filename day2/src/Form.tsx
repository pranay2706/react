import React, { useState } from "react";

interface Person {
  name: {
    firstName: string;
    lastName: string;
  };
  phoneNumber: number;
  email: string;
  password: string;
}

const Form: React.FC = () => {
  function handleSubmit(e): void {
    e.preventDefault();
    console.log(person);
  }

  const [person, setPerson] = useState<Person>({
    name: {
      firstName: "",
      lastName: "",
    },
    phoneNumber: 0,
    email: "",
    password: "",
  });

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={person.name.firstName}
          onChange={(e) =>
            setPerson({
              ...person,
              name: { ...person.name, firstName: e.target.value },
            })
          }
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          value={person.name.lastName}
          onChange={(e) =>
            setPerson({
              ...person,
              name: { ...person.name, lastName: e.target.value },
            })
          }
        />
      </label>
      <br />
      <label>
        Phone Number:
        <input
          type="number"
          value={person.phoneNumber}
          onChange={(e) =>
            setPerson({ ...person, phoneNumber: parseInt(e.target.value) })
          }
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={person.email}
          onChange={(e) => setPerson({ ...person, email: e.target.value })}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={person.password}
          onChange={(e) => setPerson({ ...person, password: e.target.value })}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
};

export default Form;
