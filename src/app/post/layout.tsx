import React from 'react'

const layout = ({ children }: any) => {
    return (
        <div>
            <h1>Layout HOC</h1>
            {children}
        </div>
    )
}

export default layout