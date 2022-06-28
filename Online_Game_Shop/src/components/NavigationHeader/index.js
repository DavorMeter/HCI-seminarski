import React from 'react'
import Logo from '../Logo'
import NavigationBar from '../NavigationBar/Index'
import SearchBox from '../SearchBox'

import {
    navigationHeader,
} from './layout.module.css'

const NavigationHeader = ({activeTab}) => (
  <section className={navigationHeader}>
    <Logo/>
    <NavigationBar activeTab={activeTab}/>
    <SearchBox/>
  </section>
)

export default NavigationHeader