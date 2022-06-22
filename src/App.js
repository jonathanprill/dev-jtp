import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import SeveranceTheme from './pages/SeveranceTheme/SeveranceTheme';
import DarkTheme from './pages/DarkTheme/DarkTheme';
import RetroTheme from './pages/RetroTheme/RetroTheme';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (

    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          path="/dev-jtp"
          element={<DarkTheme />}
        />
        <Route
          path="/dev-jtp/retro-theme/"
          element={<RetroTheme />}
        />
        <Route
          path="/dev-jtp/severance-theme/"
          element={<SeveranceTheme />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
