// src/features/usersSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(
    "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10"
  );
  return response.data.data;
});

export const fetchUserById = createAsyncThunk(
  "users/fetchUserById",
  async (id) => {
    const response = await axios.get(
      `https://api.freeapi.app/api/v1/public/randomusers/${id}`
    );

    return response.data.data;
  }
);

export const fetchRandomUser = createAsyncThunk(
  "users/fetchRandomUser",
  async () => {
    const response = await axios.get(
      "https://api.freeapi.app/api/v1/public/randomusers/user/random"
    );
    return response.data.data;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    selectedUser: null,
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.selectedUser = action.payload;
      })
      .addCase(fetchRandomUser.fulfilled, (state, action) => {
        state.selectedUser = action.payload;
      });
  },
});

export default usersSlice.reducer;
