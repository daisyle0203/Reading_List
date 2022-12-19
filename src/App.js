import axios from "axios"
import { useState, useEffect } from "react"
import BookCreate from "./components/BookCreate"
import BookList from "./components/BookList"

function App() {
  const [books, setBooks] = useState([])

  // Function to get all the books so they will be displayed when the page first loads
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books")

    setBooks(response.data)
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  const editBookById = async (id, newTitle) => {
    const response  = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle
    })

    console.log(response);

    const updatedBooks = books.map((book) => {
      if(book.id === id) {
        return { ...book, ...response.data }
      }

      return book
    })

    setBooks(updatedBooks)
  }

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    })

    console.log(response)

    const updatedBooks = [...books, response.data]

    setBooks(updatedBooks)
  }

  const deleteBook = async (id) => {
    axios.delete(`http://localhost:3001/books/${id}`)

    const updatedBooks = books.filter((book) => {
      return book.id !== id
    })

    setBooks(updatedBooks)
  }
  return (
    <div>
      <BookList onEdit={editBookById}  books={books} onDelete={deleteBook} />
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App
