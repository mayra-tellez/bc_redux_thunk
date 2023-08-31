import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './containers/Home'
import About from './components/About'
import Car from './containers/Car'
import Dashboard from './containers/Dashboard'
import Import from './containers/Import'
import { RoundaboutLeftSharp } from '@mui/icons-material'

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/car/:id" component={Car} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/import" element={<Import/>} />
        </Routes>
    );
};

export default Router;