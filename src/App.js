import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Header from "./views/header/Header";
import Footer from "./views/footer/Footer";
import AppRouter from "./AppRouter";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <Header />
          <AppRouter />
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
