import './App.css';
import {
  BrowserRouter as Router,Routes, Route,
} from 'react-router-dom';
import {Navbar} from './components/navbar'
import {Shop} from './pages/shop/shop.jsx'
import {Cart} from './pages/cart/cart.jsx'
import {ShopContextProvider} from './context/shopContext.jsx'
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Shop/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
          </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
