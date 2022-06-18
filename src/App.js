import "./App.css";
import SSectionA from "./containers/sectionA";
import HHeader from "./containers/header";
import SSectionB from "./containers/sectionB";
import SSectionC from "./containers/sectionC";
import SSectionD from "./containers/sectionD";
import FFooter from "./containers/footer";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { GlobalStyles, darkTheme, lightTheme } from "./containers/theme";
import { useState, useRef } from "react";
import { ThemeContext } from "./lib/context";
import NNews from "./containers/news";
import MobileGif from "./containers/MobileGif";
 

function App() {
  const getUserTheme = localStorage.getItem("userThemeChoice");
  const appRef = useRef(null);
  const [theme, setTheme] = useState(
    getUserTheme === null ? "dark" : getUserTheme
  );

  // login modal
  const [modal, setModal] = useState(false);
  console.log("rendered");

  localStorage.setItem("userThemeChoice", theme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme, modal, setModal, appRef }}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Router>
          <div className="App">
            <HHeader />
            <div onClick={() => setModal(false)}>
              <SSectionA />
              <SSectionB />
              <SSectionC />
              <MobileGif/>
              <NNews />
              <SSectionD />
              <FFooter />
            </div>
          </div>
        </Router>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
