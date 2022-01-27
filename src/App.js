import "./App.css";
import SSectionA from "./containers/sectionA";
import HHeader from "./containers/header";
import SSectionB from "./containers/sectionB";
import SSectionC from "./containers/sectionC";
import SSectionD from "./containers/sectionD";
import FFooter from "./containers/footer";
import { ThemeProvider } from "styled-components";

import { BrowserRouter } from "react-router-dom";
import { GlobalStyles, darkTheme, lightTheme } from "./containers/theme";
import { Header } from "./components";
import { useState } from "react";
import { ThemeContext } from "./lib/context";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />

        <BrowserRouter>
          <div className="App">
            <HHeader />
            <SSectionA />
            <SSectionB />
            <SSectionC />
            <SSectionD />
            <FFooter />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
