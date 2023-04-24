const repo = require("../Repo/repo");
function AddMovie(req, res) {
  repo.insmovie(req.body).then((data) => {
    res.status(201).send("Movie added successfully");
  });
}
function GetMovies(req, res) {
  repo.GetMovies().then((data) => {
    res.status(200).send(data);
  });
}
function GetMovie(req, res) {
  repo.GetMovie(req.params.Genre).then((data) => {
    res.status(200).send(data);
  });
}
function GetMov(req, res) {
  repo.GetMov(req.params.id).then((data) => {
    res.status(200).send(data);
  });
}
function UpdateMovie(req, res) {
  repo.UpdateMovie(req.params.id, req.body).then((data) => {
    res.status(200).send("Update done successfully");
  });
}
module.exports = { AddMovie, GetMovies, GetMovie, UpdateMovie, GetMov };
