import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Severance from './pages/Severance';
import DarkTheme from './pages/DarkTheme';
import RetroTheme from './pages/RetroTheme';

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
          path="/severance"
          element={<Severance />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
