import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import SeveranceTheme from './pages/SeveranceTheme/SeveranceTheme';
import DarkTheme from './pages/DarkTheme/DarkTheme';
import RetroTheme from './pages/RetroTheme/RetroTheme';
function App() {
  
  return (

    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<DarkTheme />}
        />
        <Route
          path="/retroTheme"
          element={<RetroTheme />}
        />
        <Route
          path="/severanceTheme"
          element={<SeveranceTheme />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
