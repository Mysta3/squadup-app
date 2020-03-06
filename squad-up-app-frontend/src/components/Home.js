import React from 'react'
import Header from './Header'
import Post from './Post'

function Home() {
    return (
        <div>
            <Header/>
            <main>
                <h1>Home Page</h1>
                <p>Find Your Squad!</p>
                <Post/>
            </main>
        </div>
    )
}

export default Home
