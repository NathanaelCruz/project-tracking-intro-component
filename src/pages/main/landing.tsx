import React from 'react'
import Header from '../../components/Header'
import HomeContent from '../home/home'

const LandingPage = () => {
    return (
        <section className="landing-content">
            <Header />
            <section className="background-divisor"></section>
            <main className="content-responsive">
                <HomeContent />
            </main>
        </section>
    )
}

export default LandingPage;