import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./about";
import Home from "./home";
import Contact from "./contact";

{
  /*
  --browserRouter
  --Routes
  --Route
  --Link

  */
}

export default function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="mynav">
          <Link className="mylink" to="/">Home</Link>
          <Link className="mylink" to="/about">About</Link>
          <Link className="mylink" to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
