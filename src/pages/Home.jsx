import React from 'react'
import Header from '../components/Header'
import Subhead from '../components/Subhead'

const Home = () => {
    return (
        <div>
            <Header />
            <Subhead pageTitle={'Home'} another={false} />
            Home</div>
    )
}

export default Home