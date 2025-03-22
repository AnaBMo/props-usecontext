import '../components/Calculator.css'
import { useCalculator } from '../context/CalculatorProvider';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Calculator = () => {
  const { addNumber, setOperation,  numbers } = useCalculator(); // nos traemos los números del context para mostrarlos más abajo
  const [selectedOperation, setSelectedOperation] = useState(""); // creamos el estado de la operación para mostrar la elegida

  const handleNumberClick = (number) => {
    if (numbers.length < 2) { 
       addNumber(number);       
    } else {
      console.log( "Máximo 2 números" );
    }
  };

  const handleOperationClick = (operation) => {
    setOperation(operation);
    setSelectedOperation(operation); 
  };

  return (
    <div className="calculator">
      <h2>Calculadora</h2>

      {/* Botones del 0 al 9 */}
      <div className="numberBtnsContainer">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
          <button key={number} onClick={() => handleNumberClick(number)}>
            {number}
          </button>
        ))}
      </div>

      <div className="selected-number">Números seleccionados: {numbers.join(", ")}</div>

      {/* Botones de operaciones */}
      <div className="operations">
        <button onClick={() => handleOperationClick("sum")}>+</button>
        <button onClick={() => handleOperationClick("subtract")}>-</button>
        <button onClick={() => handleOperationClick("multiply")}>×</button>
        <button onClick={() => handleOperationClick("divide")}>÷</button>
      </div>

      <div className="selected-operation">
        Operación seleccionada: {selectedOperation ? selectedOperation : " "}
      </div>

      {/* Enlace a la página de resultados */}
      <div className='goResult'>
        <Link to="/resultado">Resultado</Link>
      </div>
    </div>
  );
};

export default Calculator;