import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "playbook-ui/dist/reset.css";
import "playbook-ui/dist/playbook.css";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
