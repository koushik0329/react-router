import React from 'react'
import { Outlet } from 'react-router-dom'

const JobsLayout = () => {
  return (
    <div class="job-openings">
      <h2>Job openings</h2>
      <p>List of current job openings in our company</p>
      <Outlet/>
    </div>
  )
}

export default JobsLayout
