import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SavedResults, SavedItem } from "../components/savedResults/savedResults";
import Nav from "../components/nav/Nav";
import DeleteBtn from "../components/deleteBtn"
import Jumbotron from "../components/jumbotron/Jumbotron";
import API from "../utils/API";

function Saved() {
  const [saved, setSaved] = useState([])

  useEffect(() => {
    loadBooks();
  }, [])

  function loadBooks() {
    API.getBooks()
      .then(res =>
        setSaved(res.data)
      )
      .catch(err => console.log(err));
  };

  function deleteSaved(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  return (
        <div>
          {console.log(saved)}
            <Nav />
            <Jumbotron />
            <SavedResults>
                {saved.map(book =>{
                  return (
                    <SavedItem key = {book.id}>
                        <h2>{book.title}</h2>
                        <h4>{book.author}</h4>
                        <img src = {book.image} alt  = {book.title}></img>
                        <p>{book.description}</p>
                        <Link to = {book.link}>Link</Link>
                        <DeleteBtn onClick={() => deleteSaved(book._id)} />
                    </SavedItem>
                  )
                })}
            </SavedResults>
        </div>
    );
  }


export default Saved;
