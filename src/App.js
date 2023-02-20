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
    </div>
  );
}

export default App;
