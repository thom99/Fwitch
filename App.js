import { useState } from 'react';
// import { getTopGames } from './api/twitch';
import './App.css';
import TopGames from './components/Content/topgames';
import Categories from './components/Content/categories';
import Navbar from './components/Navbar';
import useTwitchAuthentication from './hooks/useTwitchAuthentication';
import {BrowserRouter as Router} from "react-router-dom";



function App() {
  const isAuthenticated = useTwitchAuthentication();
  const [data, setData] = useState([])
  const [cat, setCat] = useState([])

  if (!isAuthenticated) {
    return null;
  }

  function getTop(data) {
    setData(data)
  }

  function getCat(cat) {
    setCat(cat)
  }

  return (
    <Router>
      <div className="App">
        <Navbar setCategories={getCat} setTopGames={getTop} />
        <Categories passacategorie={cat} />
      </div>
    </Router>
  );
}

export default App;
