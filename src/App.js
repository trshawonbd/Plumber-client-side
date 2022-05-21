
import './App.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './Pages/Shared/NavBar/NavBar';
import Home from './Pages/HomePage/Home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <NavBar></NavBar>
      <Routes>
      <Route path="/" element={<Home></Home>} />
      </Routes>



      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
