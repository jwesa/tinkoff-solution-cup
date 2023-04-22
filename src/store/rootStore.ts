import { Instance, types } from "mobx-state-tree";
import { createContext } from "react";
import { ExpensesStore } from "./models";

export const rootStore = types
  .model({
    expenses: types.optional(ExpensesStore, {}),
  })
  .create({});

export const RootStoreContext = createContext<null | Instance<
  typeof rootStore
>>(null);

export const StoreProvider = RootStoreContext.Provider;
