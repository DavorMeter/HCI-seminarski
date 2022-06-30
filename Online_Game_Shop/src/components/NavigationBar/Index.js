import { Link } from 'gatsby'
import React from 'react'
import { navs } from '../../constansts/const'
import {
    navigationBar,
    active
} from './layout.module.css'

const NavigationBar = ({activeTab}) => (
  <nav className={navigationBar}>
      {navs.map(({tab,to}) => {
        if (tab === activeTab)
        return (
          <Link to = {to}>
            <li className={active}>
              {tab}
            </li>
          </Link>)
        else
          return (
            <Link to = {to}>
              <li>{tab}</li>
            </Link>
          )
      }
      )}
  </nav>
)
export default NavigationBar