import React from 'react'
import {
    container,
    navLinkItems,
    navLinkText,
    logo,
    search
} from './layout.module.css'
const NavigationHeader = () => (
  <main className={container}>
    <span className={logo}>OnineGameShop</span>
    <span>
        <ul className={navLinkItems}>
            <li className={navLinkText}>Home</li>
            <li className={navLinkText}>Store</li>
            <li className={navLinkText}>About</li>
            <li className={navLinkText}>Support</li>
            <li className={navLinkText}>Login</li>
        </ul>
    </span>
    <span className={search}>SEARCH</span>
  </main>
)

export default NavigationHeader