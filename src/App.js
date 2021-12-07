// import logo from "./logo.svg";
import "./App.css";

import MovieList from "./MovieList";
// require("dotenv").config();
function App() {
  // console.log(movies);
  return (
    <div className="App">
      <MovieList props="bob" />
    </div>
  );
}

export default App;
