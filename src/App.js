import "./App.css";
import Add from "./Components/Add";
import Header from "./Components/Header";
import WatchList from "./Components/WatchList";
import MovieDetails from "./Components/MovieDetails";
import { GlobalProvider } from "./Components/context/GlobalState";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <br />
      <Routes>
        <Route path="/" element={<WatchList />} />
        <Route path="add" element={<Add />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </GlobalProvider>
  );
}

export default App;
