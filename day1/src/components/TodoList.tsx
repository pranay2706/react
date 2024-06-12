type Person = {
  name: string;
  active: boolean;
  theme: {
    backgroundColor: string;
    color: string;
  };
};

export default function TodoList({ person }: { person: Person }) {
  return (
    <>
      {person.active ? (
        <div style={person.theme}>
          <h1>{person.name}'s Todos</h1>
          <img
            className="avatar"
            src="https://i.imgur.com/7vQD0fPs.jpg"
            alt="Gregorio Y. Zara"
          />
          <ul>
            <li>Improve the videophone</li>
            <li>Prepare aeronautics lectures</li>
            <li>Work on the alcohol-fuelled engine</li>
          </ul>
        </div>
      ) : (
        <p style={person.theme}>No todo list for {person.name}</p>
      )}
    </>
  );
}
