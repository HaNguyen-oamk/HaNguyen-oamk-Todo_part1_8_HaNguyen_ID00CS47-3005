import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../context/useUser";

export default function ProtectedRoute() {
  const { user } = useUser();

  // If the user is not authenticated or doesn't have a valid token, redirect to "/signin"
  if (!user || !user.token) return <Navigate to="/signin" />;

  // If authenticated, render the Outlet to display child routes
  return <Outlet />;
}
