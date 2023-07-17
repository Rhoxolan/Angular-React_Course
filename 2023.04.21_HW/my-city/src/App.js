import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <h1>Not found</h1>,
    children: [
      {
        index: true,
        element: <h1>About</h1>,
      },
      {
        path: "/about",
        element: <h1>About</h1>,
      },
      {
        path: "/attraction",
        element: <h1>Attraction</h1>,
      },
      {
        path: "/attractions",
        element: <h1>Attractions</h1>,
      },
      {
        path: "/photos",
        element: <h1>photos</h1>,
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
