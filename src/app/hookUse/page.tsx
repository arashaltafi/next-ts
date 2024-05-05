import React, { Suspense, use } from "react";

const HookUse = () => {
    const promise = fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json())
        .catch(error => console.log(error));

    const user = use(promise)

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <div className="w-full h-screen flex flex-col items-center justify-center">
                <h1 className="text-6xl">HookUse</h1>
                <p>name: {user.name}</p>
                <p>username: {user.username}</p>
                <p>email: {user.email}</p>
            </div>
        </Suspense>
    )
}

export default HookUse