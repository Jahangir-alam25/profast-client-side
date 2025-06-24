import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './routes/router.jsx'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import AuthProvider from './Contexts/AuthContext/AuthProvider.jsx';
// ..

AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
    <div className='font-urbanist'>
    <RouterProvider router={router} />
   </div>
   </AuthProvider>
  </StrictMode>,
)
