import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'; // Ensure RouterProvider is imported
import Layout from './Layout';
import About from './component/About/About';
import Home from './component/Home/Home';
import Contact from './component/Contact/Contact';
import Users from './component/Users/Users';
import Github from './component/Github/Github';
import Instagram from './component/Instagram/Instagram';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} /> {/* Default route for "/" */}
      <Route path="about" element={<About />} /> {/* Route for "/about" */}
      <Route path="contact" element={<Contact />} />
      <Route path="users/:userid" element={<Users />} />
      <Route path='github' element={<Github />} />
      <Route path='Instagram' element={<Instagram />} />
      
    </Route>
  )
);
// Render the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
