import logo from './logo.svg';
import './App.css';
import foodMain from'./components/foodMain';
import FoodMap from './components/foodMap';

function App() {
  return (
    <div className="App">
      <foodMain />
      <FoodMap />
    </div>
  );
}

export default App;
