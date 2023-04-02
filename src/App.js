import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./components/Products/Product";
import Slides from "./components/Slides";

function App() {
  return (
    <div className="bg-blue-100">
      <Navbar />
      <Slides />
      <Product />
    </div>
  );
}

export default App;
