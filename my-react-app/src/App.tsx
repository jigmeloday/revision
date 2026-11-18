import { useEffect } from 'react';
import './App.css';
import { HealthCheck } from './api/health-check';
import { Route, Routes } from 'react-router-dom';
import CoreRoute from './routers/core.route';

function App() {
  useEffect(() => {
    const getHealthfunc = async () => {
      const resp = await HealthCheck();
      console.log(resp);
    };
    getHealthfunc();
  }, []);
  return (
    <Routes>
      <Route path="/*" element={<CoreRoute />} />
    </Routes>
  );
}

export default App;
