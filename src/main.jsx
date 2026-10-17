import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#3b82f6",
          colorInfo: "#3b82f6",
          borderRadius: 16,
          fontFamily: '"Nunito", "Segoe UI", sans-serif',
        },
        components: {
          Button: { borderRadius: 12, controlHeight: 42 },
          Card: { borderRadiusLG: 20 },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>,
)
