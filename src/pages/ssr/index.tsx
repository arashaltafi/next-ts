import React from 'react'

type UserType = {
  name: string,
  age: number,
  email: string
}

interface PropsType {
  data: UserType
}

const SampleSSR = (props: PropsType) => {
  return (
    <div className='flex flex-col items-center justify-center gap-8 w-full px-16 py-8'>
      <h1 className='font-bold text-3xl'>Sample SSR rendering in PageRouter</h1>
      <p>server side rendering, create data in server for each run time (eact time)</p>
      <p>its good for pages to have dynamic data for each user</p>
      <h2 className='text-lg'><span className='text-green-500'>name:</span> {props.data.name}</h2>
      <h2 className='text-lg'><span className='text-green-500'>email:</span> {props.data.email}</h2>
      <h2 className='text-lg'><span className='text-green-500'>age:</span> {props.data.age}</h2>
    </div>
  )
}

export default SampleSSR

export const getServerSideProps = async () => {
  const response = await fetch('https://arashaltafi.ir/test_200.php');

  const data: UserType = await response.json();
  console.log('SSR data:', data)

  return {
    props: { data }
  };
}