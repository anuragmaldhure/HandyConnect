import "./App.css";

import { Route, Routes } from "react-router-dom";

import PublicPage from "./pages/PublicPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PublicPage />} />
      </Routes>
    </div>
  );
}

export default App;
