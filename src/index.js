
import { BrowserRouter } from 'react-router-dom';
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
</Provider>,
);

reportWebVitals();


serviceWorkerRegistration.register({
  onUpdate: async (registration) => {
      if (registration && registration.waiting) {
      await registration.unregister();
      registration.waiting.postMessage({ type: "SKIP_WAITING" });

      window.location.reload();
    }
  },
});