import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { books as DataBooks} from '../constants/mockData'
import BookCard from './BookCard'
import BookLiked from './BookLiked'
import styles from './Books.module.css'
import Search from '../components/Search/Search'
function Books() {
  const [books,setBooks]=useState(DataBooks)
  const [likedList, setLikedList] = useState([])
  const [search,setSearch]=useState('')
  const likeHandelerList = (book, status) => {
    if (status) {
      const newLikedList = likedList.filter(item => item.id !== book.id)
      setLikedList(newLikedList)
    }
    else {
      setLikedList(likedList => [...likedList, book])
    }
  }
  useEffect(() => {
    const trimmedSearch = search.trim()
    if(trimmedSearch){
      const newSearchBook=DataBooks.filter(book=>book.title.toLocaleLowerCase().includes(trimmedSearch))
      setBooks(newSearchBook)
    }
    else{
      setBooks(DataBooks)
    }
  }, [search])
  return (
    <>
    <Search  search={search} setSearch={setSearch} searchHandeler={()=>{}}/>
    <section className={styles.container} aria-label="Books collection">
      <div className={styles.cards} >
        {books.map(book => (
          <BookCard key={book.id} data={book} likeHandelerList={likeHandelerList} />
        ))}
      </div>
      {likedList.length > 0 && (
        <aside className={styles.favorite} aria-label="Favorite books">
          <h2>Favorite Books</h2>
          {likedList.map(book => 
            (<BookLiked key={book.id} data={book}/>))}
        </aside>
      )}
    </section>
    </>
  )
}

Books.propTypes = {
  // No props required for this component
}

export default Books