import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Users from './pages/Users';
import Todolist from './pages/Todolist';
import Shop from './pages/Shop';
import Login from './pages/Login';
import { AuthProvider } from './pages/AuthContext';
import { CartProvider } from './pages/CartContext';
import CartPage from './pages/CartPage';

function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/services' element={<Services />} />
              <Route path='/users' element={<Users />} />
              <Route path='/todolist' element={<Todolist />} />
              <Route path='/shop' element={<Shop />} />
              <Route path='/login' element={<Login />} />
              <Route path='/cartpage' element={<CartPage />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>

    </>
  );
}

export default App;
