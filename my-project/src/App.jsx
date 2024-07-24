import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DrawingApprovalTable from './pages/DrawingApprovalTable';
import MaterialApprovedTable from './pages/MaterialApproved';
import QAQC from './pages/Qaqc';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qaqc" element={<QAQC />} />
        <Route path="/drawing" element={<DrawingApprovalTable />} />
        <Route path="/material" element={<MaterialApprovedTable />} />

      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);  

