import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./screens/Home";
import Authentication, { AuthenticationMode } from "./screens/Authentication";
import ErrorPage from "./screens/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import UserProvider from "./context/UserProvider";

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
  },
  {
    path: "/signin",
    element: <Authentication authenticationMode={AuthenticationMode.Login} />,
  },
  {
    path: "/signup",
    element: (
      <Authentication authenticationMode={AuthenticationMode.Register} />
    ),
  },
  {
    element: <ProtectedRoute />, // Protects the child routes
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>
);
