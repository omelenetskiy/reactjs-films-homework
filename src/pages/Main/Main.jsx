import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from '../../components/Header'
import MainSection from '../../components/MainSection'
import Footer from '../../components/Footer'
import Modal from '../../components/common/Modal'
import MovieHead from '../../components/MovieHead/MovieHead'
import NotFound from '../NotFound/NotFound'
import styles from './main.scss'

const Main = () => (
  <div className={styles.main_container}>
    <Modal />
    <Header />
    <div className={styles.main_section}>
      <Switch>
        <Route exact path="/" component={MainSection} />
        <Route path="/search" component={MainSection} />
        <Route path="/details/:id" component={MovieHead} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
      <Route path="/details" component={MainSection} />
    </div>
    <Footer />
  </div>
)

export default Main
