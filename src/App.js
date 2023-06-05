import React from 'react'

import TopNavigation from './components/TopNavigation'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'


export default function App() {
    return (
        <div className='App'>
            <div className='app-container'>
                <TopNavigation />
                <Hero />
                <Features />
            </div>
        </div>
    )
}
