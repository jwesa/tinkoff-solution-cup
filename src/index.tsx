import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
import "./index.css";

import { App } from "./App";

import { rootStore, StoreProvider } from "./store";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter basename={"/tinkoff-solution-cup"}>
    <React.StrictMode>
      <StoreProvider value={rootStore}>
        <App />
      </StoreProvider>
    </React.StrictMode>
  </BrowserRouter>
);
