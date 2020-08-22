# MERN Book Search


### About
This is a MERN application utilizing the google books API to search for a book title. The user can search for a book title in the search box and a list of results will be displayed on the page. The user can save books that can be access in the save page; view more information or delete the book

---

![gif demo](./deployed-site.gif)

---

### Getting Started

* To get this app running on your local machine, run clone this repository and run npm install.

---

### Code Highlight

The code snippet belows demonstrate how the API is called to query and upon the successful response, we use react hooks to set the books object. The book object will be accessible to the rest of the page.

```js
     const handleFormSubmit = event => {
        event.preventDefault();
        console.log(bookSearch);
        API.bookSearch(bookSearch.title)
            .then(res => {
           
                console.log(res.data.items)
                setBooks(res.data.items)
            })
            .catch(err => console.log(err));
    };
```

---

### Deploy Link

[Live site](https://nameless-hollows-64586.herokuapp.com/)

---
## Authors 
### [Mai Banh](https://github.com/mtbanh)
- [LinkedIn](https://www.linkedin.com/in/banhtmai/)
- [Portfolio]( )

- email: maibanh1996@gmail.com