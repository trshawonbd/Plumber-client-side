
import './App.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './Pages/Shared/NavBar/NavBar';
import Home from './Pages/HomePage/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Products from './Pages/AllProducts/Products/Products';
import Login from './Pages/Authentication/Login/Login';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Register from './Pages/Authentication/Register/Register';

function App() {
  return (
    <div >
      <NavBar></NavBar>
      <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/allProducts" element={<Products></Products>} />
      <Route path="/dashboard" element={<Home></Home>} />
      <Route path="/blog" element={<Home></Home>} />
      <Route path="/revivew" element={<Home></Home>} />
      <Route path="/about" element={<Home></Home>} />
      <Route path="/login" element={<Login></Login>} />
      <Route path="/register" element={<Register></Register>} />
      <Route path="*" element={<NotFound></NotFound>} />
      </Routes>



      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
