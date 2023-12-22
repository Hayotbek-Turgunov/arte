import './App.css';
import Banner from './Component/Banner/Banner.js';
import Footer from './Component/Footer/Footer.js';
import Navbar from './Component/Navbar/Navbar.js'
import Product from './Component/Product/Product.js';
import Register from './Component/Register/Register.js';


function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Product />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
