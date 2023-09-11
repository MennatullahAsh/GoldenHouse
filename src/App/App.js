import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Layout, Landing } from '../Pages';
import ErrorPage from '../Pages/ErrorPage';
import Details from '../Pages/Details';
import Sign from '../Pages/Sign';
function App() {
  document.documentElement.dir = 'rtl';

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/Details/:id" element={<Details />} />
        <Route path="/Sign" element={<Sign />} />
      </Routes>
    </Router>
  );
}

export default App;
