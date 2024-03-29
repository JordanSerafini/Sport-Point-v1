import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/globalContext";

import Home from "./pages/home";
import AddInfo from "./pages/addInfo";
import InfoDetail from "./pages/informations/infoDetail";

import 'leaflet/dist/leaflet.css';


function App() {

  return (
    <>
      <GlobalProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddInfo />} />
            <Route path="/informations/:id" element={<InfoDetail />} />
          </Routes>
        </Router>
      </GlobalProvider>
    </>
  )
}

export default App
