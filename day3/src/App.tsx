import React, { useState } from "react";
import "./App.css";
import AddElementToArray from "./AddElementToArray";
import DeleteElement from "./DeleteElement";
import { IARTIST } from "./IARTIST";
import SortElement from "./SortElement";

function App() {
  const [artists, setArtists] = useState<IARTIST[]>([]);

  return (
    <>
      <p>Add element to array</p>
      <AddElementToArray setArtists={setArtists} />
      <p>Delete element from array</p>
      <DeleteElement artists={artists} setArtists={setArtists} />
      <p>Sort elements </p>
      <SortElement artists={artists} setArtists={setArtists} />
    </>
  );
}

export default App;
