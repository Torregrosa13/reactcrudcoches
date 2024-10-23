import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeCoches from './HomeCoches'
import MenuCoches from './MenuCoches'
import CrearCoche from './CrearCoche'

export default class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <MenuCoches/>
            <Routes>
                <Route path="/" element={<HomeCoches/>}/>
                <Route path="/create" element={<CrearCoche/>}/>
            </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
