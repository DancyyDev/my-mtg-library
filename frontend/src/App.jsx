import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreateCards from './pages/CreateCards.jsx'
import DeleteCards from './pages/DeleteCards.jsx'
import EditCards from './pages/EditCards.jsx'
import ShowCards from './pages/ShowCards.jsx'
import Home from './pages/Home.jsx'

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/myCards/create/' element={< CreateCards/>} />
      <Route path='/myCards/delete/:id' element={< DeleteCards/>} />
      <Route path='/myCards/edit/:id' element={<EditCards/>} />
      <Route path='/myCards/show/:id' element={<ShowCards/>} />
    </Routes>
  )
}

export default App