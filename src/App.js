import "./App.css";
import Info from "./components/Info.js";
import About from "./components/About";
import Interest from "./components/Interests";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="container">
      <article className="card">
        <Info />
        <About />
        <Interest />
        <Footer />
      </article>
    </div>
  );
}

export default App;
