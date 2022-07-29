import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from './about';



export default function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        </>
    )

}
