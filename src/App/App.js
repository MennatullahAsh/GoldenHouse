import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // استخدم BrowserRouter كمثال

import { Layout, Landing } from '../Pages';
import ErrorPage from '../Pages/ErrorPage';

function App() {
  document.documentElement.dir = 'rtl';

  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;









{/* <Route path="/Details/:id" element={<Details/>} /> */}
{/* <Route path="/" element={<Landing />} /> */}