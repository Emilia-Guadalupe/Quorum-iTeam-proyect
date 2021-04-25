import './App.css';
import ArtContainer from './Components/ArtContainer/ArtContainer';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import FAQ from './Components/FAQ/FAQ';
import Footer from './Components/Footer/Footer';

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
      <>
        <Footer />
      </>
    </div>
  );
}

export default App;
