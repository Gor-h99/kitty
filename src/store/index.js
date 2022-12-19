import {configureStore, createReducer} from '@reduxjs/toolkit';
import currencySlice from './slices/currency/currencySlice';

const store = configureStore(
	{
		reducer: {
			currency: currencySlice
		}
	}
)

export  default  store;