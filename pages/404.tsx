import React from 'react'
import Header from '../components/Header/Header'

const NotFound = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: '100vh'
            }}
        >
            <Header />
            <h1>
                Page not Found
            </h1>
        </div>
    )
}

export default NotFound
