import axios from "axios";


// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  bookSearch: function(query) {
    console.log(query)
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
  },

  getBooks: ()=>{
    return axios.get("/api/books");
  },
  getBook : (id) =>{
    return axios.get(`/api/books/${id}`)
  },
  // Saves a book to the database
  createSave: function(bookData) {
    console.log(bookData)
    return axios.post("/api/books", bookData);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete(`/api/books/${id}`);
  }
}
