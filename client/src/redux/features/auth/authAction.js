import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";
// import { toast } from "react-toastify";

// Login
export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ role, email, password }, { reajectWithValue }) => {
    try {
      const { data } = await API.post("/auth/login", { role, email, password });
      // store token
      if (data.success) {
        localStorage.setItem("token", data.token);
        alert(data.message);
        window.location.replace("/");
      }
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return reajectWithValue(error.response.data.message);
      } else {
        return reajectWithValue(error.message);
      }
    }
  }
);

// Register
export const userRegister = createAsyncThunk(
  "auth/register",
  async (
    {
      role,
      name,
      email,
      password,
      organisationName,
      hospitalName,
      website,
      address,
      phone,
    },
    { reajectWithValue }
  ) => {
    try {
      const { data } = await API.post("/auth/register", {
        role,
        name,
        email,
        password,
        organisationName,
        hospitalName,
        website,
        address,
        phone,
      });
      // store token
      if (data?.success) {
        alert("Registration successfull");
        window.location.replace("/login");
      }
      return data;
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return reajectWithValue(error.response.data.message);
      } else {
        return reajectWithValue(error.message);
      }
    }
  }
);

// current user
export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async ({ reajectWithValue }) => {
    try {
      const res = await API.get("/auth/current-user");
      if (res?.data) {
        return res?.data;
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return reajectWithValue(error.response.data.message);
      } else {
        return reajectWithValue(error.message);
      }
    }
  }
);
