import {Routes, Route} from 'react-router-dom';

import Home from "./Home";
import DoctorLogin from "./pages/DoctorLogin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/doctor-login" element={<DoctorLogin />} />
    </Routes>
  );
}

export default App