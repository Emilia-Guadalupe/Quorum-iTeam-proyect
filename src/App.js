import './App.css';
import ArtContainer from './Components/ArtContainer/ArtContainer';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import FAQ from './Components/FAQ/FAQ';

function App() {
  return (
    <div className="App">
      <NavBar />
      <>
        <Header />
      </>
      <>
        <ArtContainer />
      </>
      <div id="components-container">
        <FAQ />
      </div>
    </div>
  );
}

export default App;
