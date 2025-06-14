import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Importing Router functions
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// importing components
import About from './components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Home from './Components/Home/Home.jsx';
import Layout from './Layout.jsx';
// // Optional: Context provider if you're using global state
// import { AppProvider } from './Context/AppContext.jsx';import Layout from './Layout.jsx';
//  {/**To create a context *(Still dont know about This concept) */}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/#services' element={<Home />} />
      
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
