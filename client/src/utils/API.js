import axios from "axios";


// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  bookSearch: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=title:" + query);
  },

  getBook: ()=>{
    return axios.get("api/books");
  },
  getBook : (id) =>{
    return axios.get(`/api/books/${id}`)
  },
  saveBook: (bookData) =>{
    return axios.post("/api/books", bookData)
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
