import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const currencySlice = createSlice({
	name: 'currencySlice',
	initialState,
	reducers: {
		changeCurrency: (state, { payload }) => {
			state.currency = payload;
		},
		changeBid: (state, { payload }) => {
			state.chooseBid = payload;
		},
		calculateResult: (state, { payload }) => {
			state.balances = state.balances.map(item => {
				if (item.type === state.currency) {
					state.chosenBalance.value = payload * state.chooseBid + item.value;
					return { ...item, value: payload * state.chooseBid + item.value }
				}
				return item
			})

		},
		calculateLose: (state) => {
			state.balances = state.balances.map(item => {
				if (item.type === state.currency) {
					state.chosenBalance.value = item.value - state.chooseBid;
					return { ...item, value: item.value - state.chooseBid }
				}
				return item
			})
		},
		setChosenBalance: (state, { payload }) => {
			state.chosenBalance = payload;
			state.balances = state.balances.map(item => {
				if (item.type === payload.type) {
					return payload
				}
				return item
			})
		}
	}
});

export default currencySlice.reducer;
export const { changeCurrency, changeBid, calculateResult, calculateLose, setChosenBalance } = currencySlice.actions;