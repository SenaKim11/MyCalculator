import logo from './logo.svg';
import './App.css';

function Name ({label}){
  return (
    <button className="Name">
      {label}
    </button>
  );
}


function CalcButton({label}) {
  const handleClick = () => {
    window.alert(`You clicked the "${label}" button!`);
  };

  return (
    <button className="CalcButton" onClick={handleClick}>
      {label}
    </button>
  );
}

function CalcDisplay({display}) {
  return (
    <div className="CalcDisplay">
      {display}
    </div>
  );
}

function App() {
  return (
    <div className="CalcContainer">
      <CalcDisplay display={"My Calculator"} />
      <div className="ButtonContainer">
        <CalcButton label={7} />
        <CalcButton label={8} />
        <CalcButton label={9} />
        <CalcButton label={"+"} />
        <CalcButton label={4} />
        <CalcButton label={5} />
        <CalcButton label={6} />
        <CalcButton label={"-"} />
        <CalcButton label={1} />
        <CalcButton label={2} />
        <CalcButton label={3} />
        <CalcButton label={"x"} />
        <CalcButton label={"C"} />
        <CalcButton label={0} />
        <CalcButton label={"="} />
        <CalcButton label={"÷"} />
      </div>
      <div>
        <Name label={"Kim Julianne B. Sena"} />
        </div>
    </div>
  );
}

export default App;
