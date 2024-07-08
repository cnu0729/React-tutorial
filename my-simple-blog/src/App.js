import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Main from './component/Main';
import NavBar from './component/NavBar';
import Header from './component/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" elements={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
