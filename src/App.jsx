import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Profile from './views/Profile.jsx';
import PurchaseDetail from './views/PurchaseDetail.jsx';

function App(props) {
    return (
        <Routes>
          <Route exact path="/" element={<Profile />} />
          <Route exact path="purchase-detail" element={<PurchaseDetail />} />
          <Route exact path="purchases/:id" element={<PurchaseDetail />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Nada por acá!</p>
              </main>
            }
          />
        </Routes>
    );
};

export default App;