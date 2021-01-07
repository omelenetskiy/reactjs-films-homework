import React from 'react'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import Footer from '../components/Footer'
import Modal from '../components/common/Modal'
import styles from './main.scss'

const Main = () => (
  <div className={styles.main_container}>
    <Modal />
    <Header />
    <MainSection />
    <Footer />
  </div>
)

export default Main
