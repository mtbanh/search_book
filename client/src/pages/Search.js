import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Jumbotron from "../components/jumbotron/Jumbotron"
import Nav from "../components/nav/Nav"

const Books = () => {
    const [books, setBooks] = useState([])
    const [bookSearch, setBookSearch] = useState({})

    useEffect(() => { loadBooks() }, []);

    const loadBooks = () => {
        API.getBooks()
            .then(res => {
                setBooks(res.data)
            })
            .catch(err => console.log(err))
    };

    const handleInputChange = event => {
        const { value } = event.target;
        setBookSearch(value)
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        API.bookSearch(bookSearch)
            .then(res => setBookSearch(res.data))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Nav />
            <Jumbotron />
            <div className="container">
                <div className="row">
                    <div className="row md-12">
                        <form>
                            <div className="container">
                                <div className="row">
                                    <div className="col xs-9 sm-10">
                                        <div className="input" />
                                        <input className="form-control" type="text"
                                            name="BookSearch"
                                            value={bookSearch}
                                            onChange={handleInputChange}
                                            placeholder="Search For a Book"
                                        />
                                    </div>
                                    <div className="col xs-3 sm-2">
                                        <button
                                            onClick={handleFormSubmit}
                                            type="success"
                                            className="input-lg"
                                        >
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <div className="col xs-12">
                        {!books.length ? (
                            <h1 className="text-center">No Books to Display</h1>
                        ) : (
                                <ul>
                                    {books.map(book => {
                                        return (
                                            <li
                                                key={book.title}
                                                title={book.title}
                                                author={book.author}
                                                description={book.description}
                                                image={book.image}
                                                link={book.link}
                                            />
                                        );
                                    })}
                                </ul>
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Books;


