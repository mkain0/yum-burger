import { Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome/Welcome.tsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
    </Routes>
  );
}

export default App;
