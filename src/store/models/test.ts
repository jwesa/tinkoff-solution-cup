import { types } from 'mobx-state-tree';

export const Test = types
	.model({
		testValue: types.optional(types.string, 'Hello World'),
	})
	.actions((self) => ({
		setTestValue() {
			self.testValue = 'Hello test App';
		},
	}));
