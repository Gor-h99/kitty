
export const initialState = {
	bidAmounts: [0.05, 0.1, 0.25, 0.5, 1, 2],
	currency: 'SOL',
	chooseBid: 0.05,
	balances: [
		{
			value: 0,
			type: 'SOL',
		},
		{
			value: 0,
			type: '$SKT',
		}
	],
	chosenBalance: {
		value: 0,
		type: 'SOL',
	},
}