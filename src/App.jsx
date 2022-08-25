import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Profile from './views/Profile.jsx';
import PurchaseDetail from './views/PurchaseDetail.jsx';

function App(props) {
    return (
      <>
      <Header />
        <Routes>
          <Route path="*" element={<Profile />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="purchase_detail" element={<PurchaseDetail />} />
          <Route exact path="purchases/:id" element={<PurchaseDetail />} />
        </Routes>
      </>
    );
};

export default App;