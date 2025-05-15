import Header from "./components/Header";
import Song from "./components/Song";
import './App.css';

function App() {
  /*
  componentDidMount() {
    console.log("La aplicación se ha cargado correctamente.");
  } Este componente cusa errores
  */

  return (
    <div className="App">
      <Header appName="SongApp"/>
      <article className="Song-c">
        <Song title="Song1" artist="artist1" time="220"/>
        <Song title="Song2" artist="artist2" time="330"/>
        <Song title="Song3" artist="artist3" time="210"/>
      </article>
    </div>
  );
}

export default App;
