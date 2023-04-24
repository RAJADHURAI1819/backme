const express = require("express");
const router = express.Router();
const {
  AddMovie,
  GetMovies,
  GetMovie,
  UpdateMovie,
  GetMov,
} = require("../controller/control");
router.post("/AddToMovies", AddMovie);
router.get("/getmovies", GetMovies);
router.get("/getGenre/:Genre", GetMovie);
router.get("/getMovie/:id", GetMov);
router.put("/updateMovie/:id", UpdateMovie);
module.exports = router;
