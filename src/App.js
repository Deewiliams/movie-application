import "./App.css";
import Add from "./Components/Add";
import Header from "./Components/Header";
import WatchList from "./Components/WatchList";
import MovieDetails from "./Components/MovieDetails";
import Watched from "./Components/Watched";
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
        <Route path="watched" element={<Watched />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
      </Routes>
    </GlobalProvider>
  );
}

export default App;
