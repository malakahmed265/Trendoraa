import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav.jsx";  
import Card from "./card.jsx";
import Card2 from "./card2.jsx";
import ShopAll from "./shop all";
import About from './about.jsx';
import Contact from './contact.jsx';
import Login from './login.jsx';
import Cart from './cart.jsx';


function Home() {
  return (
    <div className="home-page">
      <Card />
      <h1>Products🛍️ </h1>
      <Card2 />
    </div>
  );
}

function about() {
  return <h2 className="text-center mt-5">ℹ️ About Us</h2>;
}

function contact() {
  return <h2 className="text-center mt-5">📞 Contact Us</h2>;
}

function login() {
  return <h2 className="text-center mt-5">🔑 Login Page</h2>;
}

function cart() {
  return <h2 className="text-center mt-5">🛒 Your Shopping Cart</h2>;
}

function App() {
  return (
    <Router>
      {/*  Nav */}
      <Nav />

      {/*  Routes */}
      <div style={{ paddingTop: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<ShopAll />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;