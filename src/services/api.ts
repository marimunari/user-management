// external libs
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
});

// Const method to register user
export const addUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  return await api.post("/register", data);
};

// Const method for user to login
export const login = async (data: { email: string; password: string }) => {
  return await api.post("/login", data);
};

// Const method for user to logout
export const logout = async (accessToken: string) => {
  return await api.post("/logout", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};

// Const method to get user details
export const getUserDetail = async (accessToken: string) => {
  return await api.get("/user", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};

// Const method to refresh tokens
export const refreshTokens = async (refreshToken: string) => {
  return await api.post("/refresh-token", { refresh_token: refreshToken });
};