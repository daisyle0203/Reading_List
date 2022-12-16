import { useState } from "react"

import BookEdit from "./BookEdit"

function BookShow({ book, onDelete }) {
  const [showEdit, setShowEdit] = useState(false)

  const handleEditClick = () => {
    setShowEdit(!showEdit)
  }

  const handleDeleteClick = () => {
    onDelete(book.id)
  }
  
  return (
    <div className="book-show">
      {book.title}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>Edit</button>
        <button className="delete" onClick={handleDeleteClick}>Delete</button>
      </div>
      </div>
  )
}

export default BookShow