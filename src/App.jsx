import "./App.css";
import { Header } from "./container";
import { Footer, Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <div className="h-full">
        <Header />
      </div>
      <Footer />
    </>
  );
}

export default App;
