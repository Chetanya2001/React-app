import { useState } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import Notes from "./components/notes";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "warning");
    }
  };
  const [mode, setMode] = useState("light");
  return (
    <>
      <Router>
        <NavBar title="React" mode={mode} toggleMode={toggleMode}></NavBar>
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<TextForm showAlert={showAlert} mode={mode} />}
            />
            <Route path="/notes" element={<Notes />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
