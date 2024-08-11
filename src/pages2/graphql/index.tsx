import { GET_STUDENTS } from '@/utils/graphql-queries';
import { useQuery } from '@apollo/client';
import React from 'react'

const Graphql = () => {
    const { loading, error, data } = useQuery(GET_STUDENTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    console.log(data)

    return (
        <div className='w-full min-h-screen flex flex-col gap-16 items-center justify-start'>
            <h1 className='text-5xl'>Graphql Query</h1>

            <ul>
                {data.students.map((student: { id: number; name: string; family: string, age: number }) => (
                    <li key={student.id} className='py-4 text-lg'>
                        <p>id: {student.id}</p>
                        <p>name: {student.name}</p>
                        <p>family: {student.family}</p>
                        <p>age: {student.age}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Graphql