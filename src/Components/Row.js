import Square from './Square';

function Row(props) {
    return (
      <div className="row">
        <Square active={!props.activeSquare}/>
        <Square active={props.activeSquare}/>
      </div>
    );
  }
  
  export default Row;
  