import './App.css';
import ArtContainer from './Components/ArtContainer/ArtContainer';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';

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
    </div>
  );
}

export default App;
