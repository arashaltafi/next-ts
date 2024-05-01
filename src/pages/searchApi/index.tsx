import React, { useEffect, useState } from 'react'

type UserType = {
    message: string
}

interface PropsType {
    data: UserType
}

const SearchApi = (props: PropsType) => {
    const [searchApi, setSearchApi] = useState<string>('')
    const [result, setResult] = useState<any>(null)

    const handleSubmit = (e: any) => {
        e.preventDefault()
        fetchApi()
    }

    const fetchApi = async () => {
        const response = await fetch(`/api/searchApi?text=${searchApi}`, {
            cache: 'no-store',
            next: { revalidate: 10 }
        })
        const data = await response.json()
        console.log(data)
        setResult(data)
    }

    useEffect(() => {
        setResult(props.data)
    }, [props.data])

    return (
        <div className='flex flex-col items-center justify-start gap-32 w-full h-screen'>
            <h1 className='text-7xl'>SearchApi</h1>

            <form
                onSubmit={handleSubmit}
                className='flex flex-col items-center justify-center gap-8'
            >
                <label
                    className='text-4xl'
                    htmlFor="text">
                    Enter text:
                </label>
                <input
                    className='text-3xl px-8 py-4 text-center rounded-3xl border border-solid border-gray-500 bg-white text-black'
                    id='text'
                    name='text'
                    type="text"
                    value={searchApi}
                    onChange={(e) => setSearchApi(e.target.value)}
                />

                <button
                    className='text-3xl px-8 py-4 rounded-3xl border border-solid border-white bg-red-500 hover:bg-red-600 transition-all text-white'
                    type="submit"
                >
                    Submit
                </button>
            </form>

            {
                searchApi && (
                    <p className='text-2xl'>
                        searchApi: {searchApi}
                    </p>
                )
            }
            {
                result && (
                    <p className='text-2xl'>
                        resultApi: {result.message}
                    </p>
                )
            }
        </div>
    )
}

export async function getServerSideProps(context: any) {
    const { query } = context
    const response = await fetch('http://localhost:3000/api/searchApi?text=' + query.text)

    if (response.status === 404) {
        return {
            notFound: true
        }
    }

    if (response.status !== 200) {
        return {
            redirect: {
                destination: '/'
            }
        }
    }

    const data = await response.json()
    return {
        props: {
            data
        },
    }
}

export default SearchApi