import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DashboardLayout from './layout/DashboardLAyout';
import Home from './pages/home';
import ProductPage from './pages/productPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/products/:productId' element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
