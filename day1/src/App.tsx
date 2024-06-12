import "./App.css";
import Profile from "./components/Profile";
import TodoList from "./components/TodoList";

interface Person {
  name: string;
  active: boolean;
  theme: {
    backgroundColor: string;
    color: string;
  };
}

function App() {
  const name: string = "Pranay";

  const userData: Person[] = [
    {
      name: "Gregorio Y. Zara",
      active: false,
      theme: {
        backgroundColor: "black",
        color: "pink",
      },
    },
    {
      name: "Alice Smith",
      active: true,
      theme: {
        backgroundColor: "blue",
        color: "white",
      },
    },
    {
      name: "John Doe",
      active: true,
      theme: {
        backgroundColor: "green",
        color: "yellow",
      },
    },
    {
      name: "Emily Johnson",
      active: false,
      theme: {
        backgroundColor: "white",
        color: "black",
      },
    },
    {
      name: "Michael Brown",
      active: true,
      theme: {
        backgroundColor: "red",
        color: "orange",
      },
    },
  ];
  return (
    <>
      <h2>Amazing Scientist</h2>
      <Profile name={name} />
      {userData.map((person) => (
        <TodoList person={person} />
      ))}
    </>
  );
}

export default App;
