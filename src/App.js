import Home from "./Components/Home/index.js";
import { useState, createContext } from "react";
import "./App.css";

const ThemeContext = createContext("light");
function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app" id={theme}>
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
export { ThemeContext };

