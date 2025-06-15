import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
//  const [data, setData] = useState([])

// useEffect(() => {
//   fetch('https://api.github.com/users/riyank036/')
//    .then(Response => Response.json())
//    .then(data => console.log(data)) 
//    setData(data)
// }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
    Github Contributions: {data.contributions}
    <img src={data.avatar_url} alt="Git picture" />
    </div>
  )
}

export default Github

export const githubLoader = async () => {
  const response = await fetch('https://api.github.com/users/riyank036/')
  return response.json()
}   