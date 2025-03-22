import '../components/Result.css'
import { useCalculator } from "../context/CalculatorProvider";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Result = () => {
  const { numbers, result, resetCalculator, calculateResult } = useCalculator();

  useEffect(() => {
    if (numbers.length > 1) {
      calculateResult();
    }
  }, [numbers, calculateResult]);
  

  return (
    <div className='resultContainer'>
      <h2>Resultado</h2>

      <p>
        <strong>Números seleccionados:</strong> {numbers.join(", ")}
      </p>
      <p>
        <strong>Resultado:</strong> {result !== null ? result : "N/A"}
      </p>

      <button onClick={resetCalculator}>Reset</button>
      <div className='backCalc'>
        <Link to="/">Volver a la calculadora</Link>
      </div>
    </div>
  );
};

export default Result;