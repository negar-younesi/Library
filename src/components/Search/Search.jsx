import React from 'react'
import PropTypes from 'prop-types'
import styles from './Search.module.css'
import { LuSearch, LuX } from "react-icons/lu";

function Search({search,setSearch,searchHandeler}) {
  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase()
    setSearch(value)
    searchHandeler()
  }

  const handleClear = () => {
    setSearch('')
    searchHandeler()
  }

  return (
    <>
    <div className={styles.search}>
    <input 
      type='text' 
      placeholder='search Title'
      value={search} 
      onChange={handleInputChange}
      aria-label="Search books by title"
    />
    {search && (
      <button 
        onClick={handleClear}
        aria-label="Clear search"
        className={styles.clearButton}
      >
        <LuX />
      </button>
    )}
    <button 
      onClick={searchHandeler}
      aria-label="Search"
    >
      <LuSearch />
    </button>
    </div>
    </>
  )
}

Search.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  searchHandeler: PropTypes.func.isRequired
}

export default Search