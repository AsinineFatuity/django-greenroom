import "../static/css/main.css"; // tailwind styles
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import reduxStore from "./src/redux/store";
import "@mantine/core/styles.css";
import "mantine-datatable/styles.layer.css";
import "@mantine/notifications/styles.css";


const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={reduxStore}>
        <App />
      </Provider>
    </React.StrictMode>,
  );
}
