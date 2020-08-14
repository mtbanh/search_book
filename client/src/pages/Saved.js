import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SavedResults, SavedItem } from "../components/savedResults";
import Nav from "../components/nav";
import DeleteBtn from "../components/deleteBtn"
import Jumbotron from "../components/jumbotron";
import API from "../utils/API";

function Saved() {
  const [saved, setSaved] = useState({})

  useEffect(() => {
    loadBooks();
  }, [])

  function loadBooks() {
    API.getSaved()
      .then(res =>
        setSaved(res.data)
      )
      .catch(err => console.log(err));
  };

  function deleteSaved(id) {
    API.deleteSaved(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  return (
        <div>
            <Nav></Nav>
            <Jumbotron></Jumbotron>
            <SavedResults>
                {saved.map(book =>{
                    <SavedItem key = {book.id}>
                        <h2>{book.title}</h2>
                        <h4>{book.author}</h4>
                        <img src = {require(book.image)}></img>
                        <p>{book.description}</p>
                        <Link to = {book.link}>Link</Link>
                        <DeleteBtn onClick={() => deleteSaved(book._id)} />
                    </SavedItem>
                })}
            </SavedResults>
        </div>
    );
  }


export default Saved;
