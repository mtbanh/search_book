import React, { useState, useEffect } from "react";
import API from "../utils/API";

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
            <Container>
                <Row>
                    <Col size="md-12">
                        <form>
                            <Container>
                                <Row>
                                    <Col size="xs-9 sm-10">
                                        <Input
                                            name="BookSearch"
                                            value={bookSearch}
                                            onChange={handleInputChange}
                                            placeholder="Search For a Book"
                                        />
                                    </Col>
                                    <Col size="xs-3 sm-2">
                                        <Button
                                            onClick={handleFormSubmit}
                                            type="success"
                                            className="input-lg"
                                        >
                                            Search
                        </Button>
                                    </Col>
                                </Row>
                            </Container>
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Col size="xs-12">
                        {!recipes.length ? (
                            <h1 className="text-center">No Books to Display</h1>
                        ) : (
                                <BookList>
                                    {books.map(book => {
                                        return (
                                            <BookListItem
                                                key={book.title}
                                                title={book.title}
                                                author={book.author}
                                                description={book.description}
                                                image={book.image}
                                                link={book.link}
                                            />
                                        );
                                    })}
                                </BookList>
                            )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Books;


