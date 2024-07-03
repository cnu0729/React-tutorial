import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>홈페이지에 오신 것을 환영합니다.</h1>
      </header>
      <main>
        <section>
          <h2>About us</h2>
          <p>이 홈페이지는 간단한 리액트 홈페이지 입니다.</p>
        </section>
        <h2>Contact</h2>
        <p>Email : contact@email.com</p>
      </main>
      <footer>
        <p>&copy; 2024 My website</p>
      </footer>
    </div>
  );
}

export default App;
