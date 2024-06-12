import { IARTIST } from "./IARTIST";

interface SortElementProps {
  setArtists: React.Dispatch<React.SetStateAction<IARTIST[]>>;
  artists: IARTIST[];
}

const SortElement: React.FC<SortElementProps> = ({ setArtists, artists }) => {
  const sortArtistsByNumber = () => {
    const sortedArtists = [...artists].sort((a, b) => a.number - b.number);
    setArtists(sortedArtists);
  };

  return (
    <div>
      {artists.map((artist) => {
        return (
          <div>
            <p>{artist.name}</p>
            <p>{artist.email}</p>
            <p>{artist.number}</p>
          </div>
        );
      })}
      <button onClick={sortArtistsByNumber}>Sort by Number</button>
    </div>
  );
};

export default SortElement;
