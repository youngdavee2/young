import './App.css';
import Navbar from './components/Navbar';
import SignUp from './components/signUp';
import Main from './components/main';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main/>
      <SignUp/>

    </div>
  );
}

export default App;
