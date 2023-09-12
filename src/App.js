import { SkeletonTheme } from "react-loading-skeleton";
import "./App.css";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App font-popps">
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:name" element={<Movies />} />
          </Routes>
        </Router>
      </SkeletonTheme>
    </div>
  );
}

export default App;
