
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
import RequireAuth from './Pages/Authentication/RequireAuth/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';
import MyReview from './Pages/Dashboard/MyReview/MyReview';
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';
import AddTool from './Pages/Dashboard/AddTool/AddTool';
import SingleTool from './Pages/HomePage/SingleTool/SingleTool';
import Users from './Pages/Dashboard/All Users/Users/Users';
import Payment from './Pages/Dashboard/Payment/Payment/Payment';
import AllOrders from './Pages/Dashboard/AllOrders/AllOrders/AllOrders';
import ManageProducts from './Pages/Dashboard/ManageAllProducts/ManageProducts/ManageProducts';
import Footer from './Pages/Shared/Footer/Footer';
import Blog from './Pages/Blog/Blog';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import { useState } from 'react';

function App() {
  const [dark, setDark] = useState(false);
  
  return (
    <div data-theme={dark ? "light" : "dark"}>
      <NavBar 
      dark={dark}
      setDark={setDark}
      ></NavBar>
      <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/singleTool/:id" element={<RequireAuth>

        <SingleTool></SingleTool>
      </RequireAuth>} />
      <Route path="/allProducts" element={<RequireAuth>
        <Products></Products>
      </RequireAuth>} />
      <Route path="/allProducts/:id" element={<RequireAuth>
        <Products></Products>
      </RequireAuth>} />
      <Route path="/dashboard" element={<RequireAuth>
        <Dashboard></Dashboard>
      </RequireAuth>}>
      <Route index element={<MyProfile></MyProfile>} />
           <Route path='myReview' element={<MyReview></MyReview>} />
           <Route path='myOrder' element={<MyOrder></MyOrder>} />
           <Route path='addTool' element={<AddTool></AddTool>} />
           <Route path='allUsers' element={<Users></Users>} />
           <Route path='allOrder' element={<AllOrders></AllOrders>} />
           <Route path='manageProducts' element={<ManageProducts></ManageProducts>} />
           <Route path='payment/:id' element={<Payment></Payment>} />

      </Route>
      <Route path="/blog" element={<Blog></Blog>} />
      
      <Route path="/about" element={<MyPortfolio></MyPortfolio>} />
      <Route path="/login" element={<Login></Login>} />
      <Route path="/register" element={<Register></Register>} />
      <Route path="*" element={<NotFound></NotFound>} />
      </Routes>

      <Footer></Footer>



      <ToastContainer theme='colored'></ToastContainer>
    </div>
  );
}

export default App;
