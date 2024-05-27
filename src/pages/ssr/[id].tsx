import Head from 'next/head'
import React from 'react'

type UserType = {
  id: string,
  title: number,
  body: string
}

interface PropsType {
  data: UserType
}

const SampleSSR = (props: PropsType) => {
  return (
    <>
      <Head>
        <title>{props?.data?.title}</title>
        <meta name="description" content={props?.data?.body} />
      </Head>
      <div className='flex flex-col items-center justify-center gap-8 w-full px-16 py-8'>
        <h1 className='font-bold text-3xl'>Sample SSR rendering in PageRouter</h1>
        <p>server side rendering, create data in server for each run time (eact time)</p>
        <p>its good for pages to have dynamic data for each user</p>
        <h2 className='text-lg'><span className='text-green-500'>id:</span> {props.data.id}</h2>
        <h2 className='text-lg'><span className='text-green-500'>title:</span> {props.data.title}</h2>
        <h2 className='text-lg'><span className='text-green-500'>body:</span> {props.data.body}</h2>
      </div>
    </>
  )
}

export default SampleSSR

export const getServerSideProps = async (context: any) => {
  const { req, res, query, params } = context

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

  console.log('request:', req)
  console.log('res:', res)
  console.log('query:', query)
  console.log('params:', params)

  const data: UserType = await response.json();
  console.log('SSR data:', data)

  if (response.status === 404) {
    return {
      notFound: true
    }
  } else if (response.status !== 200) {
    return {
      redirect: {
        destination: '/'
      }
    }
  } else {
    return {
      props: { data },
    }
  }
}