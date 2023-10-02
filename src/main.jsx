import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import NotFound from "./Components/NotFound";
import Root from "./Root";
import About from "./Pages/About/About";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import AuthContextProvider from "./context/AuthContextProvider";
import CommingSoon from "./Components/CommingSoon";

const url = 'https://my-json-server.typicode.com/faarhaan10/react-sunglasses/sunglasses';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <Home />,
        loader: async () => (fetch(url))
      },
      {
        path: 'products',
        element: <Products />,
        loader: async () => (fetch(url))
      },
      {
        path: 'product/:id',
        element: <ProductDetail />,
        loader: async ({ params }) => (fetch(`${url}/${params.id}`))
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'contact',
        element: <CommingSoon title='Contact Page'/>
      },
      {
        path: 'blog',
        element: <CommingSoon tilte='Blog Page'/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);