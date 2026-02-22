import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { IoHeart } from "react-icons/io5";
import styles from './BookCard.module.css'

function BookCard({ data,likeHandelerList }) {
    const{ title, author, language, image, pages, country, year, link }=data
    const [like,setLike]=useState(false)
   
    const likeHandeler=()=>{
        likeHandelerList(data,like)
        setLike(like=>!like)
    }
    return (
        <>
            <article className={styles.card}>
                <img 
                  src={image} 
                  alt={title} 
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDEwMCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTUwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0yNSA1MEg3NVYxMDBIMjVWNTBaIiBmaWxsPSIjRDJEMUQxIi8+CjxwYXRoIGQ9TTM1IDYwSDY1VjcwSDM1VjYwWiIgZmlsbD0iI0QyRDFEMSIvPgo8cGF0aCBkPSJNMzUgODBINjVWOTBIMzVWODBaIiBmaWxsPSIjRDJEMUQxIi8+Cjwvc3ZnPg=='
                  }}
                />
                <div className={styles.info}>
                    <h3>{title}</h3>
                    <p>{author}</p>
                    <div className={styles.details}>
                        <span>{language}</span>
                        <span>{pages} pages</span>
                        <span>{country}</span>
                        <span>{year > 0 ? year : `${Math.abs(year)} BCE`}</span>
                    </div>
                    {link && (
                        <a 
                          href={link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={styles.learnMore}
                          aria-label={`Learn more about ${title} on Wikipedia`}
                        >
                          Learn More →
                        </a>
                    )}
                </div>
                <button 
                  onClick={likeHandeler}
                  aria-label={`Like ${title}`}
                >
                  <IoHeart color={like ? "red":"#e0e0e0"} fontSize="1.8rem" />
                </button>
            </article>
        </>
    )
}

BookCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    pages: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    link: PropTypes.string
  }).isRequired,
  likeHandelerList: PropTypes.func.isRequired
}

export default BookCard