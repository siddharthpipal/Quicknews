import "./App.css";
import Cards from "./components/Cards";
import Categorychoose from "./components/Categorychoose";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Categorychoose />

        <Routes>
          <Route
            path="/"
            element={<Cards key="General" category="general" />}
          />

          <Route
            path="/Business"
            element={<Cards key="Business" category="business" />}
          />
          <Route
            path="/Entertainment"
            element={<Cards key="Entertainment" category="Entertainment" />}
          />
          <Route
            path="/Health"
            element={<Cards key="Health" category="Health" />}
          />
          <Route
            path="/Science"
            element={<Cards key="Science" category="Science" />}
          />
          <Route
            path="/Sports"
            element={<Cards key="Sports" category="Sports" />}
          />
          <Route
            path="/Technology"
            element={<Cards key="Technology" category="technology" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
