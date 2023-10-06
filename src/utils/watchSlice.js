import { createSlice } from "@reduxjs/toolkit";

const watchSlice = createSlice({
  name: "watch",
  initialState: {
    item: [],
  },
  reducers: {
    addVideo: (state,action) => {
      console.log('index list'+state.item.includes(action.payload));
      if(!state.item.includes(action.payload))
        state.item.push(action.payload);
    // console.log(state.watch);
    },
    
  },
});

export const { addVideo } = watchSlice.actions;
export default watchSlice.reducer;

