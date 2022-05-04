import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';
import Navbar from './components/Navbar';
import Support from './Pages/Support';
import Login from './Pages/Login';
import List from './Pages/List';
import Trip from './Pages/Trip';
import Esponanl from './Pages/Esponanl';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Esponanl' element={<Esponanl />} />

        {/* Esponanl */}
        <Route path='/Support' element={<Support />} />
        <Route path='/List' element={<List />} />
        <Route path='/Trip' element={<Trip />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
