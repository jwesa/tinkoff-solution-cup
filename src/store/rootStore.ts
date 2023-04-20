import { types, Instance } from 'mobx-state-tree';
import { createContext } from 'react';
import { Test } from './models/test';

export const rootStore = types
	.model({
		test: types.optional(Test, {}),
	})
	.create({});

export const RootStoreContext = createContext<null | Instance<
	typeof rootStore
>>(null);

export const StoreProvider = RootStoreContext.Provider;
