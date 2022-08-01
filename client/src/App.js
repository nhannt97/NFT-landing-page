import logo from './logo.svg';
import './App.css';
import renderRouter from './router';

function App() {
  return (
    <div className="App">
      {renderRouter()}
    </div>
  );
}

export default App;
