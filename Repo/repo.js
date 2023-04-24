const insmovModel = require("../model/model.js");
function insmovie(fav) {
  return new Promise((resolve, reject) => {
    let Fav = new insmovModel({
      _id: fav._id,
      movie: fav.movie,
      year: fav.year,
      Genre: fav.Genre,
      url: fav.url,
    });
    Fav.save((err) => {
      if (!err) {
        resolve("Movie done successfully");
      } else {
        reject(err);
      }
    });
  });
}
function GetMovie(e) {
  return new Promise((resolve, reject) => {
    insmovModel.findOne({ Genre: e }, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
}
function GetMov(e) {
  return new Promise((resolve, reject) => {
    insmovModel.findOne({ _id: e }, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
}
function GetMovies() {
  return new Promise((resolve, reject) => {
    insmovModel.find({}, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
}
function UpdateMovie(id, fav) {
  return new Promise((resolve, reject) => {
    let newMovie = new insmovModel({
      movie: fav.movie,
      year: fav.year,
      Genre: fav.Genre,
      url: fav.url,
    });
    insmovModel.findOneAndUpdate({ _id: id }, newMovie, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
}
module.exports = { insmovie, GetMovies, GetMovie, UpdateMovie, GetMov };
