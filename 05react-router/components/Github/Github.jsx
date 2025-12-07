import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
  const data = useLoaderData();

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //   .then(res => res.json())
  //   .then(data => {setData(data)})
  // }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers : {data.followers}
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
  const res = await fetch('https://api.github.com/users/hiteshchoudhary');
  const data = await res.json();
  return data;
}