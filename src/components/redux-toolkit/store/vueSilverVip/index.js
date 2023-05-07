import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// createAsyncThunk 参数的第一个 是action对象的 type， 第二个函数的返回结果是 action对象的 payload
export const getVueSilverVipsAction = createAsyncThunk(
  "vueSilverVips",
  async (params, store) => {
    console.log('{params, request}', {params, store});
    const res = await axios.get("https://sponsors.vuejs.org/data.json");

    // 这里不起作用
    // store.dispatch(setVueSilverVipsAction(res.data.silver));

    return res.data.silver;
  }
);

const vueSilverVipSlice = createSlice({
  name: "vip",
  initialState: {
    vips: [],
  },
  reducers: {
    setVueSilverVipsAction(state, action) {
      state.vips = action.payload;
    },
  },
  extraReducers: {
    [getVueSilverVipsAction.pending](state, action) {
        console.log("getVueSilverVipsAction.pending");
    },
    [getVueSilverVipsAction.fulfilled](state, action) {
        state.vips = action.payload;
    },
    [getVueSilverVipsAction.rejected](state, action) {
        console.log("getVueSilverVipsAction.rejected");
    },
  }
});

const {setVueSilverVipsAction} = vueSilverVipSlice.actions;

export default vueSilverVipSlice.reducer;
