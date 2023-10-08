import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Services from './components/Services/Services';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';
import NoPage from './components/NoPage/NoPage';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
