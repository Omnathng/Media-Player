import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth register/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/projects' element={<Projects/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
