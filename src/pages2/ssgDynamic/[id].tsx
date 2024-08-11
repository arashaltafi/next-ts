import { useRouter } from 'next/router'
import React from 'react'

type ProductType = {
    title: string,
    price: number,
    description: string
}

interface PropsType {
    data: ProductType
}

const SampleSSG = (props: PropsType) => {
    const router = useRouter()

    return (
        <>
            {
                router.isFallback ? <p>Loading...</p> :
                    <div className='flex flex-col items-center justify-center gap-8 w-full px-16 py-8'>
                        <h1 className='font-bold text-3xl'>Sample SSG rendering in PageRouter</h1>
                        <p>site static generation, static data in build time (just once)</p>
                        <p>its good for pages to have static data</p>
                        <h2 className='text-lg'><span className='text-green-500'>title:</span> {props.data.title}</h2>
                        <h2 className='text-lg'><span className='text-green-500'>price:</span> {props.data.price}</h2>
                        <h2 className='text-lg'><span className='text-green-500'>description:</span> {props.data.description}</h2>
                    </div>
            }
        </>
    )
}

export default SampleSSG

export const getStaticProps = async (context: any) => {
    const { params } = context
    console.log('params:', params)
    const response = await fetch('https://fakestoreapi.com/products/' + params.id);

    const data: ProductType = await response.json();
    console.log('SSG data:', data)

    return {
        props: { data }
    };
}

export const getStaticPaths = async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=4');
    const data = await response.json();

    const paths = data.map((product: any) => {
        return {
            params: {
                id: product.id.toString()
            }
        }
    })

    return {
        paths: paths,
        fallback: 'blocking' //false, true, 'blocking'
        // false => return 404 page
        // true => return empty page and wait for data
        // blocking => wait for data then return
    }
}