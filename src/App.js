import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Home from "./pages/Home";
import Utilities from "./pages/Utilities";
import Navbar from "./components/Navbar";
import Fun from "./pages/Fun";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            ></Route>
            <Route
              path="/utilities"
              element={<Utilities />}
            ></Route>
            <Route
              path="/fun"
              element={<Fun />}
            ></Route>
            <Route
              path="/about"
              element={<AboutMe />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
