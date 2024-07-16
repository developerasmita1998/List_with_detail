// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import EmployeeList from './EmployeeList';
import EmployeeDetail from './EmployeeDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/EmployeeDetail/:id" element={<EmployeeDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
