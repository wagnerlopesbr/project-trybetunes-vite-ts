import { Routes, Route } from 'react-router-dom';
import { Login, Search, Album, Header } from './components';

function App() {
  return (
    <>
      <p>Trybetunes</p>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route element={ <Header /> }>
          <Route path="/search" element={ <Search /> } />
          <Route path="/album/:id" element={ <Album /> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
