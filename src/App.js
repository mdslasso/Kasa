//import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';
import Home from './pages/Home';
import Apropos from './pages/Apropo';
import { Routes, Route } from 'react-router-dom';
import './css/App.css';

function App() {
  return (
    <div className="app">

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="*" element={<Error />} />
      </Routes>


      < Footer />

    </ div>

  );
}

export default App;
