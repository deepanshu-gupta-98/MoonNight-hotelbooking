import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './Pages/List/List';
import Hotel from './Pages/Hotel/Hotel';
import Home from './Pages/Home/Home';
import Login from './components/Account/Login';
import Register from './components/Account/Register';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path="/"element={<Home/>}/>
     <Route path="/hotels"element={<List/>}/>
     <Route path="/hotels/:id"element={<Hotel/>}/>
      <Route path ='/Register' element ={<Register/>}/>
      <Route path ='/Login' element ={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
