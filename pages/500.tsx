import React from 'react'
import Header from '../components/Header/Header';

const ServerError = () => {
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
                Server Error
            </h1>
        </div>
    )
}

export default ServerError;
