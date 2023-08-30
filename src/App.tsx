import { Routes, Route } from 'react-router-dom';
import { Login, Search, Album } from './components';

function App() {
  return (
    <>
      <p>Trybetunes</p>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/search" element={ <Search /> } />
        <Route path="/album/:id" element={ <Album /> } />
      </Routes>
    </>
  );
}

export default App;
