import React, { useState } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";

//const url = process.env.REACT_APP_API_URL;

const url = "http://localhost:3001";

console.log("API URL:", url); // Log the API URL for debugging

export default function UserProvider({ children }) {
  const userFromSessionStorage = sessionStorage.getItem("user");
  const [user, setUser] = useState(
    userFromSessionStorage
      ? JSON.parse(userFromSessionStorage)
      : { email: "", password: "" }
  );

  const signUp = async () => {
    const json = JSON.stringify(user);
    const headers = { headers: { "Content-Type": "application/json" } };
    try {
      const response = await axios.post(url + "/user/register", json, headers);
      console.log("SignUp Response:", response.data); // Log for debugging
      alert(response.data.message || "Registration successful!");
      setUser({ email: "", password: "" });
    } catch (error) {
      alert(error.response?.data?.error || "An error occurred during sign-up.");
      throw error;
    }
  };

  const signIn = async () => {
    const json = JSON.stringify(user);
    const headers = { headers: { "Content-Type": "application/json" } };
    try {
      const response = await axios.post(url + "/user/login", json, headers);
      console.log("SignIn Response:", response.data); // Log for debugging
      if (response.data && response.data.token) {
        setUser(response.data);
        sessionStorage.setItem("user", JSON.stringify(response.data));
      } else {
        throw new Error("Login failed: Invalid response format");
      }
    } catch (error) {
      setUser({ email: "", password: "" });
      alert(error.message || "An error occurred during sign-in.");
      throw error;
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, signUp, signIn }}>
      {children}
    </UserContext.Provider>
  );
}
