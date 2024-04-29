import React from 'react'

type UserType = {
  name: string,
  age: number,
  email: string
}

interface PropsType {
  data: UserType
}

const SampleSSG = (props: PropsType) => {
  return (
    <div className='flex flex-col items-center justify-center gap-8 w-full px-16 py-8'>
      <h1 className='font-bold text-3xl'>Sample SSG rendering in PageRouter</h1>
      <p>site static generation, static data in build time (just once)</p>
      <p>its good for pages to have static data</p>
      <h2 className='text-lg'><span className='text-green-500'>name:</span> {props.data.name}</h2>
      <h2 className='text-lg'><span className='text-green-500'>email:</span> {props.data.email}</h2>
      <h2 className='text-lg'><span className='text-green-500'>age:</span> {props.data.age}</h2>
    </div>
  )
}

export default SampleSSG

export const getStaticProps = async () => {
  const response = await fetch('https://arashaltafi.ir/test_200.php');

  const data: UserType = await response.json();
  console.log('SSG data:', data)

  return {
    props: { data }
  };
}