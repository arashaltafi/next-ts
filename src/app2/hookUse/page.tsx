import React, { cache, Suspense, use } from "react";

const HookUse = () => {
    const promise = fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json())
        .catch(error => console.log(error));

    const HookCache = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
        const res = await response.json()
        return res
    }

    const userUse = use(promise)
    const userCache = cache(HookCache)

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <div className="w-full h-screen flex flex-col items-center justify-center">
                <h1 className="text-6xl">HookCache</h1>
                <p>name: {userCache.name}</p>
                {/* <p>username: {userCache.username}</p>
                <p>email: {userCache.email}</p> */}

                <h1 className="text-6xl mt-16">HookUse</h1>
                <p>name: {userUse.name}</p>
                <p>username: {userUse.username}</p>
                <p>email: {userUse.email}</p>
            </div>
        </Suspense>
    )
}

export default HookUse