import { useState } from 'react';
// import { getTopGames } from './api/twitch';
import './App.css';
import Content  from './components/Content';
import Navbar from './components/Navbar';
import useTwitchAuthentication from './hooks/useTwitchAuthentication';


function App() {
  const isAuthenticated = useTwitchAuthentication();
  const [data,setData] = useState([])
  const [cat,setCat] = useState([])

  if (!isAuthenticated) {
    return null;
  }

  function getTop(data){
    setData(data)
  }

  function getCat(cat){
    setCat(cat)
  }
  
  return (
    <div className="App">
      <Navbar setCategories={getCat} setTopGames={getTop}  />
      <Content passacategorie={cat} passadati={data} />
    </div>
  );
}

export default App;
