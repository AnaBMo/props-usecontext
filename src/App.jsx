import { BrowserRouter as Router } from 'react-router-dom';
import { CalculatorProvider } from './context/CalculatorProvider';
import RoutesBrowser from './routes/Routes';

function App() {
  return (
    <CalculatorProvider>
      <Router>
        <RoutesBrowser /> 
      </Router>
    </CalculatorProvider>
  );
}

export default App;