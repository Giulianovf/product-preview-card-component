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
      </header>
      <footer className="footer">
      <span class="footer__span">
        Challenge by <a className="footer__a" href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a>. 
      </span>
      <span className="footer__span">
        Coded by <a class="footer__a" href="https://www.frontendmentor.io/profile/Giulianovf">Giuliano Vasconcelos Figueiró</a>.
      </span>
    </footer> 
    </div>
  );
}

export default App;
