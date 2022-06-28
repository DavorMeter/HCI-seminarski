import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  logo,
  search,
  navBar,
  navBarItems,
  navLinkItem,
  navLinkText
} from './layout.module.css'
const Layout = ({ pageTitle, children }) => {
  return (
    <body className={container}>
      <div>
        <title>{pageTitle}</title>
        <nav className={navBar}>
          <ul>
          <Link to="/" className={logo}>
                OnlineGameShop
              </Link>
          </ul>
          <ul className={navBarItems}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/store" className={navLinkText}>
                Store
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/support" className={navLinkText}>
                Support
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/login" className={navLinkText}>
                Login
              </Link>
            </li>
          </ul>
          <ul className={search}>SEARCH</ul>
        </nav>
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
      </div>
    </body>
  )
}
export default Layout