import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import About from './pages/About'

import RootLayout from './layout/RootLayout'
import ContactLayout from './layout/ContactLayout'
import ContactInfo from './components/ContactInfo'
import ContactForm from './components/ContactForm'
import NotFound from './components/NotFound'
import JobsLayout from './layout/JobsLayout'
import Jobs, { jobsLoader } from './pages/JObs'
import JobDetails, { jobDetailsLoader } from './components/JobDetails'

const App = () => {

  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}></Route>
        <Route path='products' element={<Products/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='contact' element={<ContactLayout/>}>
          <Route path='info' element={<ContactInfo/>}></Route>
          <Route path='form' element={<ContactForm/>}></Route>
        </Route>
        <Route path='jobs' element={<JobsLayout/>}>
          <Route index element={<Jobs/>} loader={jobsLoader}/>
          <Route path=':id' element={<JobDetails/>} loader={jobDetailsLoader}></Route>
        </Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
