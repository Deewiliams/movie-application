import './App.css';
import Add from './Components/Add';
import { GlobalProvider } from './Components/context/GlobalState';

function App() {
  return (
    <GlobalProvider>
    <Add />
      
    </GlobalProvider>
   
   
  );
}

export default App;
