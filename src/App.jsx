import { Routes, Route} from 'react-router-dom'
import { useState } from 'react'

import Home from './assets/page/Home'
import Result from './assets/page/Result'
import Header from './assets/components/Header'
import "./App.css"

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result/:resultId" element={<Result />} />
      </Routes>
    </>
  )
}

export default App
