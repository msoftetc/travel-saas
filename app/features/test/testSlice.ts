// app/features/test/testSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface TestState {
  value: number;
  message: string;
  todo:[{id:number,title:string}]
}


const initialState: TestState = {
  value: 0,
  message: "Hello from the Test Slice!",
  todo:[{id:1,title:"do work"}]
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

export const { increment, setMessage } = testSlice.actions;
export default testSlice.reducer;
