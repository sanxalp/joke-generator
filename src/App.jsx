import { useRef, useState } from "react";
import "./App.css";
import useRandomJoke from "./useRandomJoke";

function App() {
  const categoryRef = useRef(null);

  const [category, setCategory] = useState("");

  const joke = useRandomJoke(category);

  const generateJoke = (e) => {
    e.preventDefault();
    setCategory(categoryRef.current.value);
    //goes to input field which has the category and when we click the button it will go ahead and grab that value
  };

  return (
    <div>
      <center>
        <h1>Joke Generator</h1>

        <h2>{joke}</h2>

        <form>
          <input placeholder="category" ref={categoryRef} />
        </form>
        <button onClick={generateJoke}>Generate Joke</button>
      </center>
    </div>
  );
}

export default App;
