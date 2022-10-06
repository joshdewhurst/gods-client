import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import './App.css';

import God from './controllers/pages/God';
import Gods from './controllers/pages/Gods';
import Home from './controllers/pages/Home';
import Nav from './controllers/partials/Nav';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route
          path='/'
          element={<Home />}
          />
          <Route
          path='/god'
          element={<Gods />}
          />
          <Route
          path='/god/:id'
          element={<God />}
          />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
