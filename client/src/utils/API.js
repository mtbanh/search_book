import axios from "axios";


// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  bookSearch: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
  },

  getBooks: ()=>{
    return axios.get("api/books");
  },
  
  // saveBook: () =>{
  //   return axios.post("/api/books", savedBooks)
  // },
  getSaved: function() {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteSaved: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  createSave: function(bookData) {
    return axios.post("/api/books", bookData);

  }
}
