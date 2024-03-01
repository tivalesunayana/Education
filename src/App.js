// import './App.css';

// function App() {
// return (


//   <div className='px-2 mx-5 px-4 py-3'>
//     <div>
//       <ul className='flex justify-end space-x-10'>
//         <img
//           src="https://play-lh.googleusercontent.com/RQzseFw87JP9kZFgUaqM7-Sy0xz5QKIDZveHs6z-ZWz9gwmidq-0IcHQmd6Cq0MBNw"
//           alt="key"
//           className=" mr-auto	 w-8 "
//         />
//         <li className='cursor-pointer hover:text-orange-600' >Home</li>
//         <li className='cursor-pointer  hover:text-orange-600'>About</li>
//         <li className='cursor-pointer  hover:text-orange-600'>Portfolio</li>
//         <li className='cursor-pointer  hover:text-orange-600'>Service</li>
//         <li className='cursor-pointer  hover:text-orange-600'>Blog</li>
//         <li className='cursor-pointer  hover:text-orange-600'>Contact</li>
//       </ul>
//       <div className='flex'>
//         <div className=' py-40'>
//           <h2 className='text-orange-600'>Hello,I'm</h2>
//           <h1 className='py-3 font-semibold'>James Smith</h1>
//           <h5>
//             A <span className="text-green-600">Creative Designer</span> From{' '}
//             <span className="text-purple-600">New York</span>
//           </h5>
//           <h1 className='py-2 font-light'>I'm creative designer based in New York ,and Im'very passionate and dedicated to my work</h1>
//           <div className='flex items-center space-x-4'>
//             <button className='text-white bg-orange-600 rounded-3xl px-3 py-2 w-20'>Ask Me</button>
//             <img
//               src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-icon.svg"
//               alt="key"
//               className="mr-2 w-8 h-8 px-1 py-1 rounded-full"
//             />
//             <img
//               src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/whatsapp-icon.svg"
//               alt="key"
//               className="mr-2 w-8 h-8 px-1 py-1 rounded-full"
//             />
//             <img
//               src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-square-icon.svg"
//               alt="key"
//               className="mr-2 w-8 h-8 px-1 py-1 rounded-full"
//             />
//           </div>


//         </div>
//         <div> <img
//           src="https://plus.unsplash.com/premium_photo-1681490490493-935cd8a8f422?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJvb2slMjByZWFkaW5nJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"
//           alt="key"
//           className=" ml-auto	  w-full px-4 py-5 rounded-4xl "
//         /></div>

//       </div>

//     </div>
//   </div>

// )
// }

// export default App;

import { BrowserRouter as Router, Routes, Route, useLocation, } from 'react-router-dom'

import './App.css';
import About from './components/About';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import NavigationMenu from './components/NavigationMenu';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import ForgotPassword from './components/ForgotPassword';
import CareerGuidance from './components/CareerGuidance';
import Footer from './components/Footer';
import { ToastContainer } from "react-toastify";
import Try from "./components/try"
import Student from "./components/Student"
function App() {
  return (
    <div>

      <Router>
        <NavigationMenu />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/service" element={<Service />} />

          <Route path="/sign-in" element={<SignUp />} />
          <Route path="/career" element={<CareerGuidance />} />
          <Route path="/student" element={<Student />} />

          <Route path="/try" element={<Try />} />

        </Routes>
        <FooterOnAbout />
      </Router>
      {/* <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      /> */}
    </div>
  )
}


function FooterOnAbout() {
  let location = useLocation();
  if (location.pathname === '/about') {
    return <Footer />;
  }
  return null;
}
export default App;
