import React from 'react'
import PropTypes from 'prop-types'
import styles from './BookLiked.module.css'
function BookLiked({data:{image,title}}) {
  return (
    <article className={styles.card}>
        <img src={image} alt={title} onError={(e) => {
          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDEwMCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTUwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0yNSA1MEg3NVYxMDBIMjVWNTBaIiBmaWxsPSIjRDJEMUQxIi8+CjxwYXRoIGQ9TTM1IDYwSDY1VjcwSDM1VjYwWiIgZmlsbD0iI0QyRDFEMSIvPgo8cGF0aCBkPSJNMzUgODBINjVWOTBIMzVWODBaIiBmaWxsPSIjRDJEMUQxIi8+Cjwvc3ZnPg=='
        }} />
        <p>{title}</p>
    </article>
  )
}

BookLiked.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
}

export default BookLiked