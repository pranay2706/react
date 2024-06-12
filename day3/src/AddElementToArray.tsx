import { useState } from "react";
import { IARTIST } from "./IARTIST";

interface AddElementProps {
  setArtists: React.Dispatch<React.SetStateAction<IARTIST[]>>;
}
let nextId: number = 0;

const AddElementToArray: React.FC<AddElementProps> = ({ setArtists }) => {
  const [newArtist, setNewArtist] = useState<IARTIST>({
    id: 0,
    name: "",
    email: "",
    number: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewArtist((prevState: IARTIST) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const artistWithId: IARTIST = {
      ...newArtist,
      id: nextId++,
    };
    setArtists((prevArtists) => [...prevArtists, artistWithId]);
    setNewArtist({
      id: 0,
      name: "",
      email: "",
      number: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={newArtist.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={newArtist.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="number">Number:</label>
        <input
          type="number"
          id="number"
          name="number"
          value={newArtist.number.toString()}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddElementToArray;
