import { Instance, types } from "mobx-state-tree";
import { createContext } from "react";

export const rootStore = types
  .model({})
  .create({});

export const RootStoreContext = createContext<null | Instance<
  typeof rootStore
>>(null);

export const StoreProvider = RootStoreContext.Provider;
