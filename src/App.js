
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import banner_women from './Components/Assets/banner_women.png';
import banner_kids from './Components/Assets/banner_kids.png';
import ShopContextState from './Context/ShopContextState';

function App() {
  return (
    <div>
    <ShopContextState>
    <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path='/'element={<Shop/>}/>
      <Route path='/men'element={<ShopCategory banner={men_banner} category='men'/>}/>
      <Route path='/women'element={<ShopCategory banner={banner_women} category='women'/>}/>
      <Route path='/kid'element={<ShopCategory banner={banner_kids} category='kid'/>}/>
      <Route path='product'element={<Product/>}>
       <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart'element={<Cart/>}/>
      <Route path='/login'element={<LoginSignup/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
     </ShopContextState>
    </div>
  );
}

export default App;
