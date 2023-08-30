import { Routes, Route } from 'react-router-dom';
import Login from './components/login';

function App() {
  return (
    <>
      <p>Trybetunes</p>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/search" element={ <p>Search</p> } />
      </Routes>
    </>
  );
}

export default App;
