import { Routes, Route } from "react-router-dom";
import { AlbumDetailsPage } from "./pages/AlbumDetails/AlbumDetailsPage";
import { AlbumOverviewPage } from "./pages/AlbumOverview/AlbumOverviewPage";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/album-overview/:artist" element={<AlbumOverviewPage />} />
      <Route path="/album/:artist/:album" element={<AlbumDetailsPage />} />
    </Routes>
  );
}

export default App;
