import React from 'react'
import { useLoaderData } from 'react-router-dom'


const JobDetails = () => {
    const jobDetails=useLoaderData();
  return (
    <div>
        <p><b>Job Title: </b>{jobDetails.title}</p>
        <p><b>Salary: </b>{jobDetails.salary}</p>
        <p><b>Job Location: </b>{jobDetails.location}</p>
        <p><b>Description: </b>No description</p>
        <button>Apply Now</button>
    </div>
  )
}

// import { useParams } from 'react-router-dom'

// const JobDetails = () => {
//     const {id}=useParams();
//   return (
//     <div>
//       <h1>ID is {id}</h1>
//     </div>
//   )
// }

export default JobDetails

export const jobDetailsLoader=async({params})=>{
    const {id}=params;
    const res=await fetch("http://localhost:5000/jobs/"+id);
    return res.json();
}
