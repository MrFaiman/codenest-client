import "./index.css";

import ReactDOM from "react-dom/client";
import init_i18n from "@lib/i18n";

import Layout from "@components/Layout";

init_i18n();

ReactDOM.createRoot(document.getElementById("root")!).render(<Layout />);
