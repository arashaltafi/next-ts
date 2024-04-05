import { useEffect, useState } from 'react';

type UserType = {
  name: string,
  age: number,
  email: string
}

const SampleCSR = () => {
  const [data, setData] = useState<UserType | null>(null);

  const getData = async () => {
    const response = await fetch('https://arashaltafi.ir/test_200.php');

    const json: UserType = await response.json();
    console.log('CSR data:', json)

    setData(json);
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='flex flex-col items-center justify-center gap-8 w-full px-16 py-8'>
      <h1 className='font-bold text-3xl'>Sample CSR rendering in PageRouter</h1>
      {
        data &&
        <>
          <h2 className='text-lg'><span className='text-green-500'>name:</span> {data.name}</h2>
          <h2 className='text-lg'><span className='text-green-500'>email:</span> {data.email}</h2>
          <h2 className='text-lg'><span className='text-green-500'>age:</span> {data.age}</h2>
        </>
      }
    </div>
  )
}

export default SampleCSR