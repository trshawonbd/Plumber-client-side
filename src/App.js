
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

function App() {
  return (
    <div >
      <NavBar></NavBar>
      <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/singleTool/:id" element={<SingleTool></SingleTool>} />
      <Route path="/allProducts" element={<RequireAuth>
        <Products></Products>
      </RequireAuth>} />
      <Route path="/allProducts/:id" element={<RequireAuth>
        <Products></Products>
      </RequireAuth>} />
      <Route path="/dashboard" element={<RequireAuth>
        <Dashboard></Dashboard>
      </RequireAuth>}>
      <Route index element={<MyOrder></MyOrder>} />
           <Route path='myReview' element={<MyReview></MyReview>} />
           <Route path='myProfile' element={<MyProfile></MyProfile>} />
           <Route path='addTool' element={<AddTool></AddTool>} />

      </Route>
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
