import { useState } from 'react';
import { getTopGames } from './api/twitch';
import './App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
import useTwitchAuthentication from './hooks/useTwitchAuthentication';

function App() {
  const isAuthenticated = useTwitchAuthentication();
  const [data,setData] = useState([])

  if (!isAuthenticated) {
    return null;
  }

  function getTop(data){
    setData(data)
  }
  
  return (
    <div className="App">
      <Navbar setTopGames={getTop}  />
      <Content passadati={data} />
    </div>
  );
}

export default App;
