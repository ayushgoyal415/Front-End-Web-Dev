import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//. Importing CSS
import "./styles/.css";
import "./styles/nav.css";
import "./styles/main.css";
import "./styles/footer.css"

//. Importing fonts is not required as fonts were already imported inside stylesheet

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
