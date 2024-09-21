import { useState, useEffect } from "react";

import "./css/fetchApi.css";

export default function FetchApi() {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const api = "https://pokeapi.co/api/v2/pokemon/pikachu";
  const fetchApi = () => {
    fetch(api)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`You got an error in fetching data from server ${res.status}`)
        } 
        return res.json()
      })
      .then((data) => {
        setApiData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  console.log(apiData);

  if (loading) {
    return (
      <div className="Myroot">
        <div className="">
          <h1>Data Loading....</h1>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="Myroot">
        <div className="">
          <h1>Error: {error}</h1>
        </div>
      </div>
    );
  }



  return (
    <div className="Myroot">
      <div className="MainDiv">
        <h1>Catch Pokemon</h1>
        <ul>
          <li key={1}>
            <img
              src={apiData.sprites.other.dream_world.front_default}
              alt="Picqachu"
            />
            <h2>{apiData.name}</h2>
          </li>
        </ul>
      </div>
    </div>
  );
}
