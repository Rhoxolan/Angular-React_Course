import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './Home';
import About from './About';
import Attraction from './Attraction';
import Attractions from './Attractions';
import Photos from './Photos';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <h1>Not found</h1>,
    children: [
      {
        index: true,
        element: <About></About>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/attraction",
        element: <Attraction></Attraction>,
      },
      {
        path: "/attractions",
        element: <Attractions></Attractions>,
      },
      {
        path: "/photos",
        element: <Photos></Photos>,
      }
    ]
  }
]);

function App() {
  return (
    <div className="container mt-3">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
