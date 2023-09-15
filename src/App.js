// import { SkeletonTheme } from "react-loading-skeleton";
import "./App.css";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App font-popps">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:name" element={<Movies />} />
          <Route path="/search/:title" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
