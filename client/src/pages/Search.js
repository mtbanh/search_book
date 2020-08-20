import React, { useState, useEffect } from "react";
import SearchForm from "../components/search";
import API from "../utils/API";
import Jumbotron from "../components/jumbotron/Jumbotron"
import Nav from "../components/nav/Nav"

const Books = () => {
    const [books, setBooks] = useState([])
    const [bookSearch, setBookSearch] = useState({})

    // useEffect(() => { loadBooks() }, []);

    const loadBooks = () => {
        API.getBooks()
            .then(res => {
                setBooks(res.data)
            })
            .catch(err => console.log(err))
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        console.log(event.target)
        setBookSearch({ ...bookSearch, [name]: value })
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        console.log(bookSearch)
        API.bookSearch(bookSearch.title)

            .then(res => {
                //    const temp = [...books]
                //    console.log(temp)
                console.log(res.data.items)
                setBooks(res.data.items)
                // console.log(temp)
            })
            .catch(err => console.log(err));
    };

    const saveBook = saveTitle => {
        console.log(books)
        // const book = books.find((book) => book.title === saveTitle)
        // console.log(book)
        let saveBookInfo = {}
        for (var i=0; i<books.length; i++){
            if(books[i].volumeInfo.title === saveTitle){
                 saveBookInfo ={
                    "title" : books[i].volumeInfo.title,
                    "author" : books[i].volumeInfo.authors[0],
                    "description" : books[i].volumeInfo.description,
                    "image" : books[i].volumeInfo.imageLinks.smallThumbnail,
                    "link" : books[i].volumeInfo.infoLink

                };
            }
        }
        API.createSave(saveBookInfo)
            .then(res => console.log(`saved!`))
            .catch(err => console.log(err))
    };



    return (
        <div>
            <Nav />
            <Jumbotron />
            <div className="container">

                <div className="row">
                    <div className="col xs-9 sm-10">
                        <h3 class="login-heading mb-4">Search for a Book</h3>
                        <form >
                            <div class="form-label-group">
                                <span>Title</span>
                                <input
                                    type="name"
                                    name="title"
                                    onChange={handleInputChange}
                                    // id="inputName"
                                    class="form-control"
                                    placeholder="Harry Potter"
                                    required autofocus />

                            </div>
                            <div className="col xs-3 sm-2">
                                <button
                                    onClick={handleFormSubmit}
                                    type="submit"
                                    className="input-lg"
                                >
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <div className="row">
                            {!books.length ? (
                                <h1 className="text-center">No Books to Display</h1>
                            ) : (
                                    <div>
                                        {books.map(book => {
                                            const bookInfo = book.volumeInfo;
                                            // console.log(books)
                                            // { console.log(book.volumeInfo.title) }
                                            return (
                                                <div className="card mb-3">
                                                    <div className="row">
                                                        <div className="col-md-2">
                                                            <img alt={bookInfo.title} className="img-fluid" src={bookInfo.imageLinks.smallThumbnail} />
                                                        </div>

                                                        <div className="col-md-10">
                                                            <div className="card-body" key={book._id}>
                                                                <h5 className="card-title"> {bookInfo.title} by {bookInfo.authors}</h5>
                                                                <p className="card-text">{bookInfo.description}</p>
                                                                <div>
                                                                    <a href={bookInfo.infoLink} className="btn badge-pill btn-outline-dark mt-3" target="_blank" >View</a>
                                                                    <button
                                                                        onClick={() => {
                                                                            // console.log(book._id);
                                                                            saveBook(bookInfo.title)
                                                                        }}
                                                                        className="btn badge-pill btn-outline-warning mt-3 ml-3" >
                                                                        Save
                                                                    </button>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        {/* <li key={bookInfo.title}>
                                                            <p>{bookInfo.title}
                                                                {bookInfo.authors}
                                                                {bookInfo.description}
                                                                {bookInfo.imageLinks.smallThumbnail}
                                                                {bookInfo.previewLlink}
                                                            </p>
                                                        </li> */}
                                                    </div>
                                                </div>
                                            );

                                        })}
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );

};
export default Books;


