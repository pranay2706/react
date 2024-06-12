import { IARTIST } from "./IARTIST";

interface DeleteElementProps {
  setArtists: React.Dispatch<React.SetStateAction<IARTIST[]>>;
  artists: IARTIST[];
}

const DeleteElement: React.FC<DeleteElementProps> = ({
  setArtists,
  artists,
}) => {
  function handleDelete(id: number): void {
    const updateArtistList = artists.filter((artist) => artist.id != id);
    setArtists(updateArtistList);
  }
  return (
    <ul>
      {artists.map((artist) => {
        return (
          <div>
            <p>{artist.name}</p>
            <p>{artist.email}</p>
            <p>{artist.number}</p>
            <button onClick={() => handleDelete(artist.id)}>Delete</button>
          </div>
        );
      })}
    </ul>
  );
};

export default DeleteElement;
