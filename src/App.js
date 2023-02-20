import './App.css';
import AddToCart from './components/AddToCart';
import Discription from './components/Discription';
import Prices from './components/Prices';

function App() {
  return (        
    <div className="App">
      <header className="App-header">
        <div className="container">
        <img src="./image-product-desktop.jpg" alt="foto do perfume"/>  
        <div className="discription">
        <Discription/>        
        <Prices/> 
        <AddToCart />
        </div>
    </div>
  
    <footer class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="github.com/Giulianovf">Giuliano Vasconcelos Figueiró</a>
    </footer>
      </header>
    </div>
  );
}

export default App;
