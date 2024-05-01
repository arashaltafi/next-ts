import React from 'react'
import { useQuery } from 'react-query'

const ReactQuerySample = () => {

    const fetchRepo = async () => {
        const response = await fetch('https://arashaltafi.ir/test_200.php')
        const json = await response.json()
        return json
    }

    const { isLoading, error, data, isFetching } = useQuery("repoData", fetchRepo)

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error;

    if (data == undefined || data == null) return "data is undefined";

    return (
        <div className='flex flex-col items-center justify-center '>
            <h1 className='text-5xl'>
                ReactQuerySample
            </h1>
            {
                isFetching ? "Updating..." :
                    <div className='flex flex-col items-center justify-center gap-8 mt-32'>
                        <p className='text-2xl text-red-500'>
                            <span className='text-sky-500 text-3xl font-bold'>name: </span>{data.name}
                        </p>
                        <p className='text-2xl text-red-500'>
                            <span className='text-sky-500 text-3xl font-bold'>age: </span>{data.age}
                        </p>
                        <p className='text-2xl text-red-500'>
                            <span className='text-sky-500 text-3xl font-bold'>email: </span>{data.email}
                        </p>
                    </div>
            }
        </div>
    )
}

export default ReactQuerySample