import "./components/styles/index.css";
import { RouteProvider } from "./Context";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <RouteProvider>
        <Header />
        <Main />
        <Footer />
      </RouteProvider>
    </div>
  );
}

export default App;
