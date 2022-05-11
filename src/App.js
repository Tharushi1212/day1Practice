import './App.css';
import Counter from './components/counter';
import Counters from './components/counters';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from './components/navbar';

function App() {
  return (
    <Router className="App">
      <Routes>
      
    <Route index element={<Counters/>}/>
    <Route  component={<Counters/>}/>

      </Routes>
    </Router>
  );
}

export default App;
