import { Link } from 'gatsby'
import React from 'react'
import {
    logo,
    logoText
} from './layout.module.css'

const Logo = () => (
  <section className={logo}>
    <span className={logoText}>
      <Link to='/'>OnlineGameShop</Link>
    </span>
  </section>
)

export default Logo