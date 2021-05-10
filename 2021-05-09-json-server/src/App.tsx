import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header"
import ToDoContainer from "./ToDoContainer"

function App() {
  return (
    <div className="App">
      <Header />
      <ToDoContainer />
    </div>
  );
}

export default App;
