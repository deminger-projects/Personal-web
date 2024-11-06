import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Mapa from "../src/components/mapa/App"
import Sorting from "../src/components/sorting/App"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
        <Routes>
            <Route path="/">
            <Route index element={<App />} />
            <Route path="mapa" element={<Mapa />} />
            <Route path="sorting" element={<Sorting />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
