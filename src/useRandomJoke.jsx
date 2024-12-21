import { useState, useEffect } from "react";

function useRandomJoke(category) {
  const [joke, setJoke] = useState(""); //keep track of joke

  useEffect(() => {
    const fetchJoke = async () =>
      await fetch(
        `https://api.chucknorris.io/jokes/random?category=${category}`
      ) //fetches joke
        .then((res) => res.json()) //converts to json
        .then((data) => {
          setJoke(data.value);
        });

    fetchJoke();
  }, [category]); //add category to dependency list

  return joke;
}

export default useRandomJoke;
