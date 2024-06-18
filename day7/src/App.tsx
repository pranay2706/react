import "./App.css";
import CleanUp from "./CleanUp";
import UseRefComponent from "./UseRefComponent";
import UseRefDom from "./UseRefDom";

function App() {
  return (
    <>
      <h1>Use ref</h1>
      <UseRefComponent />
      <h1>Use of use ref for dom manipulation</h1>
      <UseRefDom />
      <h1>Use of cleanup function in useEffect</h1>
      <CleanUp />
    </>
  );
}

export default App;
