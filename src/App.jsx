import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import {Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
