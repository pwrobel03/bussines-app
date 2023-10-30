import React from 'react'
import styles from './style'

import {
  Navbar,
  Hero,
  Business,
  Billings,
  Button,
  CardDeal,
  Clients,
  Cta,
  Footer,
  GetStarted,
  Testimonials,
  Stats
} from './components'

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar>

        </Navbar>
      </div>
    </div>



    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero></Hero>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats></Stats>
        <Business></Business>
        <Billings></Billings>
        <CardDeal></CardDeal>
        Testimonials
        Clients
        CTA
        Footer
      </div>
    </div>
  </div>
)

export default App

