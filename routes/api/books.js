const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const axios = require ("axios");

router.get("/books", (req,res)=>{
  axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
  .then(({data: {result}}) =>res.json(results))
  .catch(err =>console.log(err))
});

// Matches with "/api/books"
// router.route("/search")
//   .get(booksController.findAll)
//   .post(booksController.create);

// Matches with "/api/books/saved"
// router
//   .route("/saved")
//   .get(booksController.findAll)
// //   .put(booksController.update)
//   .delete(booksController.remove);


module.exports = router;
