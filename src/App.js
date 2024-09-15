import { HashRouter as Router, Routes, Route, useParams, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Section/Footer/Footer';
import Navbar from './Section/Navbar/Navbar';
import { useState } from 'react';
import v from './assests/video/v1.mp4'
import Swal from 'sweetalert2';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/SignIn/Login';
import SignUp from './Pages/SignIn/SignUp';
import About from './Pages/About/About';
import FQS from './Pages/FQS/FQS';
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("authToken");
  return token ? children : <Navigate to="/login" />;
};
function App() {
 
  
  window.onload = () =>{
    Swal.fire({
      html: `
        <video class="rounded-[30px] sm:max-md:w-[100%] sm:max-md:  " style="width: 100%, height: 100%", muted autoplay controls>
          <source src=${v} type="video/mp4">
          المتصفح الخاص بك لا يدعم تشغيل الفيديو.
        </video>
      `,
      height: '200px',
      padding: '0',
      showConfirmButton: false,
      customClass: {
        popup: 'video-popup',
      },
    });
    
    
  }
  return (
    <Router>
      <div className="bg-bgMainSection relative flex flex-col items-center mx-auto lg:overflow-x-hidden lg:no-scrollbar w-maxWidth sm:max-md:w-widthMobile min-h-[100vh]  ">
      <Navbar />
      <div className='w-[100%] min-h-[100vh] '>
      <Routes>
        <Route path='/home' element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
        <Route path='/contact' element={<ProtectedRoute><Contact /></ProtectedRoute>} />
        <Route path='/about' element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path='/fqs' element={<ProtectedRoute><FQS /></ProtectedRoute>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<SignUp/>} />
        <Route path={`/productDetails/:id`} element={<ProtectedRoute><ProductDetails /></ProtectedRoute>} />
      </Routes>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
