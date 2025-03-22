import { createContext, useContext, useState } from "react";

const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {

  const [numbers, setNumbers] = useState([]); 
  const [operation, setOperation] = useState(null); 
  const [result, setResult] = useState(null); 

  // añadir números seleccionados a la lista
  const addNumber = (num) => {
    setNumbers((selectedNumbers) => [...selectedNumbers, num]);
  };

  // resetear los valores de la calculadora
  const resetCalculator = () => {
    setNumbers([]);
    setOperation(null);
    setResult(null);
  };

  // obtener el resultado de una operación entre dos números
  const calculateResult = () => {

    const [num1, num2] = numbers;
    let result = 0;

    switch (operation) {
      case "sum":
        result = num1 + num2;
        break;
      case "subtract":
        result = num1 - num2;
        break;
      case "multiply":
        result = num1 * num2;
        break;
      case "divide":
        result = num2 !== 0 ? num1 / num2 : " No se puede dividir por 0";
        break;
      default:
        result = "Error: Operación no válida";
    }

    setResult(result);
  };

  return (
    <CalculatorContext.Provider
      value={{ numbers, addNumber, resetCalculator, setOperation, calculateResult, result }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculator = () => useContext(CalculatorContext);