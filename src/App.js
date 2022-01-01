import './App.css';
import { Row } from './Components';

function App() {
  
  const random = function() {
    return Math.round(Math.random());
  }
  
  return (
    <div className="container">
      <div className="board">
        <Row activeSquare={random()}/>
        <Row activeSquare={random()}/>
        <Row activeSquare={random()}/>
        <Row activeSquare={random()}/>
        <Row activeSquare={random()}/>
        <Row activeSquare={random()}/>
        <Row activeSquare={random()}/>
        <Row activeSquare={random()}/>
        <Row activeSquare={random()}/>
        <Row activeSquare={random()}/>
      </div>
      <button className="btn" onClick={() => window.location.reload()}>Refresh</button>
    </div>
    
  );
}

export default App;
