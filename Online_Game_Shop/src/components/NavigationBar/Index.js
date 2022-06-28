import React from 'react'

import {
    navigationBar,
    active
} from './layout.module.css'

const navTabs = ['HOME','STORE','ABOUT','SUPPORT','LOGIN']
const NavigationBar = ({activeTab}) =>
<nav className={navigationBar}>
    {navTabs.map(tab => {
      if (tab === activeTab)
      return (
        <li className={active}>
          {tab}
        </li>)
      else
        return <li>{tab}</li>
      }
    )}
</nav>

export default NavigationBar