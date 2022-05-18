import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import "./i18n";
import { persistor, store } from "./redux/store";
import "./theme.scss";
import ErrorBoundary from "./ErrorBoundary";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ErrorBoundary>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </ErrorBoundary>
);

reportWebVitals(({ id, label, name, value }) => {
  console.log("reportWebVitalsss", id, label, name, value);
  window.gtag("event", name, {
    event_category:
      label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    event_label: id,
    non_interaction: true,
    value: Math.round(name === "CLS" ? value * 1000 : value),
  });
});
