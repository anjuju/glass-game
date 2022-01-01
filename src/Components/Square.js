function Square(props) {
    return (
      <div className={`square ${props.active ? 'active' : ''}`}></div>
    );
  }
  
  export default Square;