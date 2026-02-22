import React from 'react'
import PropTypes from 'prop-types'
import styles from './Layout.module.css'
function Layout({children}) {
    return (
        <>
        <div className={styles.container}>
            <header>
                <h1>Book App</h1>
                <p className={styles.text}>React.js</p>    
            </header>
            <main>
                {children}
            </main>
            <footer>
                <p>developed by negar younesi with love</p>
            </footer>
        </div>
    </>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout