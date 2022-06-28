import React from 'react'

import {
    navigationBar,
    active
} from './layout.module.css'

const NavigationBar = () =>
<section>
    <nav className={navigationBar}>
        <li className={active}>HOME</li>
        <li>STORE</li>
        <li>ABOUT</li>
        <li>SUPPORT</li>
        <li>LOGIN</li>
    </nav>
</section>

export default NavigationBar