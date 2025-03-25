import { createSlice } from "@reduxjs/toolkit";

interface User {
  name: string;
  role: string;
}

const initialState: User = {
  name: "",
  role: "",
};

export const userSlice = createSlice({
  name: "userManagement",
  initialState: initialState,
  reducers: {
    fetchUser: (state) => {
      state.name = "Nguyen Hai";
      state.role = "admin";
    },
  },
});

export const { fetchUser } = userSlice.actions;

export default userSlice.reducer;
