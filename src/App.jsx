import Routes from "./components/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/tailwind.css";
import "./styles/index.css";
import "./styles/font.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Routes />
      </Router>
      <Footer className="mt-[38px] self-stretch bg-indigo-600 py-[18px]" />
    </>
  );
}

export default App;
