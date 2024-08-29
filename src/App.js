import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { PersistGate } from "redux-persist/integration/react";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import AppRouter from "./AppRouter";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <ScrollToTop>
            <div className="App flex flex-col">
              <Header />
              <AppRouter />
              <Footer />
            </div>
          </ScrollToTop>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
