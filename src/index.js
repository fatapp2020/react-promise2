import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD8nr3XQxQEFAbZL5CgwcpeJf5sCTLHk9Y",
  authDomain: "react-app-36503.firebaseapp.com",
  projectId: "react-app-36503",
  storageBucket: "react-app-36503.appspot.com",
  messagingSenderId: "259392393963",
  appId: "1:259392393963:web:51f7f087a058dcbbf3e4ae"
};

initializeApp(firebaseConfig);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
