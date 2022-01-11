import "./App.css";
import getData from "./getData";
import { useState } from "react";

function App() {
  const [quote, setQuote] = useState("To be or not to be");

  const getDataHandler = () => {
    getData().then((data) => {
      setQuote(data.name);
    });
  };

  return (
    <div className="App">
      <div className="card">
        <h2 className="card__title"> {quote} </h2>
        <p className="card__apply">
          <button className="card__link" onClick={getDataHandler}>
            Apply Now
          </button>
        </p>
      </div>
    </div>
  );
}

export default App;
