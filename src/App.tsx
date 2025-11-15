import { Routes, Route } from "react-router-dom";
import { AlbumDetailsPage } from "./pages/AlbumDetails/AlbumDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/album/:artist/:album" element={<AlbumDetailsPage />} />
    </Routes>
  );
}

export default App;
