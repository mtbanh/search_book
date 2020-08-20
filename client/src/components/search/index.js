import React from "react";


const SearchForm = (props) =>{
return (
  <div className="container">
  <form>
    <div className="form-group">
      <label htmlFor="search"><h2>Search for and save Books of Interest</h2></label>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="title"
        type="text"
        className="form-control"
        placeholder="Search for a Book"
        id="search"
      />
      <button onClick={props.handleFormSubmit} className="btn btn-dark mt-3 mb-5" type="submit">
        Search
        </button>
    </div>
  </form>
  </div>
);
}

export default SearchForm;