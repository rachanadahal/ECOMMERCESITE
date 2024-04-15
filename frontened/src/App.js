
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import { ShopCategory } from './Pages/ShopCategory';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { product } from './Pages/product';
import { Shop } from './Pages/Shop';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Shop category="shop"/>}/>
        <Route path='/mens' element={<ShopCategory category="mens"/>}/>
        <Route path='/womens' element={<ShopCategory  category="womens"/>}/>
        <Route path='/kids' element={<ShopCategory  category="kids"/>}/>
     <Route  path='/product' element={<product/>}>
      <Route path=':productId' element={<product/>}/>

     </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}
 
export default App;
