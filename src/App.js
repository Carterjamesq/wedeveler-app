import Home from "./pages/Home";
import ThemeProvider from "./ThemeProvider";
import Switch from "./Switch";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        {({ darkMode, toggleDarkMode }) => (
          <div
            style={{
              background: darkMode ? "#0d0d0d" : "#fff",
              color: darkMode ? "#fff" : "#0d0d0d",
            }}
          >
            <Switch checked={darkMode} onChange={toggleDarkMode} />
            <Home />
          </div>
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;
