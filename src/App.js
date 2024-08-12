import logo from './logo.svg';
import './App.css';
import PageNotFound from './Screen/pagenotfound/PageNotFound';
import Home from './Screen/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Screen/Login/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
  
  <Routes >
    <Route path="/"  element={<Login/>} />
    
   
    <Route path="*" element={<PageNotFound/>} />
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
