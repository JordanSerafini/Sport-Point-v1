import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/globalContext";

import Home from "./pages/home";
import 'leaflet/dist/leaflet.css';


function App() {

  return (
    <>
      <GlobalProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </GlobalProvider>
    </>
  )
}

export default App
