import { Route, Routes } from 'react-router-dom';
import Calculator from '../components/Calculator';
import Result from '../components/Result';
import Header from '../components/Header';

function RoutesBrowser() {
  return (
    <>
        <Header />
        <Routes>
            <Route path="/" element={<Calculator />} />
            <Route path="/resultado" element={<Result />} />
        </Routes>
    </>
    
  );
}

export default RoutesBrowser;