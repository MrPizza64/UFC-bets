import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface BetsState {
  amount: number;
}

const initialState: BetsState = {
  amount: 0,
};

const betsSlice = createSlice({
  name: "bets",
  initialState,
  reducers: {
    setBet: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },
    resetBet: (state) => {
      state.amount = 0;
    }
  },
});

export default betsSlice.reducer;
export const { setBet, resetBet } = betsSlice.actions;
