import React, { useState, useEffect} from 'react';
import './App.css';
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import Library from './components/Library';

function App() {
  const [searchResults, setSearchResults] = useState([
    {id:20191, title:"RSong1", artist:"LORT", time:230},
    {id:20192, title:"RSong2", artist:"HP", time:270},
    {id:20193, title:"RSong3", artist:"GOT", time:250},
    {id:20194, title:"RSong4", artist:"MCU", time:240},
    {id:20195, title:"RSong5", artist:"LOG", time:260},
    {id:20196, title:"RSong6", artist:"COL", time:290},
    {id:20197, title:"RSong7", artist:"ESS", time:210},
    {id:20198, title:"RSong8", artist:"CG", time:230},
    {id:20199, title:"RSong9", artist:"ST!", time:220},
    {id:201910, title:"RSong10", artist:"CB!", time:240},
  ]);

  const [library, setLibrary] = useState([]);
  
  const addToLibrary = (songId) => {
    setLibrary([...library, songId]);
  };

  useEffect(() => {
    console.log('La biblioteca ha sido actualizada:', library);
  }, [library]);

  return (
    <div className="App">
      <Header appName="SongApp"/>
      <section className="Container">
        <article className="SearchSong-c">
          <SearchResults songs={searchResults} addToLibrary={addToLibrary} library={library} />
        </article>
        <article className="Library-c">
          <Library library={library} addToLibrary={addToLibrary} />
        </article>
      </section>
    </div>
  );
}

export default App;
