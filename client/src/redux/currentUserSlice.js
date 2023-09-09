import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isTyping: false,
  chatUsers: [],
  numberOfUsers: 0,
  data: [],
  typingTo: "",
  onlineUsers: [],
};

const userSlicer = createSlice({
  name: "currentUser",
  initialState,
  reducers: {},
});

export const {} = userSlicer.actions;

export default userSlicer.reducer;
