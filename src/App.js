import './App.css';
import Add from './Components/Add';
import Header from './Components/Header';
import WatchList from './Components/WatchList';
import { GlobalProvider } from './Components/context/GlobalState';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <GlobalProvider>
       <Header />
       <Routes>
        <Route path="/" element={<WatchList />} />
        <Route path="add" element={ <Add />} />
      </Routes>
      
   
      
    </GlobalProvider>
   
   
  );
}

export default App;
