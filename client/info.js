var movies = [
    {
      "title": "Avengers: Age of Ultron",
      "year": 2015,
      "rated": "PG-13",
      "released": "2015-05-01",
      "runtime": "141 min",
      "genre": "Action, Adventure, Sci-Fi",
      "director": "Joss Whedon",
      "writer": "Joss Whedon, Stan Lee (Marvel comics), Jack Kirby (Marvel comics)",
      "actors": "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans",
      "plot": "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's Mightiest Heroes to stop the villainous Ultron from enacting his terrible plans.",
      "language": "English",
      "country": "USA",
      "awards": "1 win & 12 nominations.",
      "poster": "http://ia.media-imdb.com/images/M/MV5BMTU4MDU3NDQ5Ml5BMl5BanBnXkFtZTgwOTU5MDUxNTE@._V1_SX300.jpg",
      "metaScore": 66,
      "imdbRating": 7.6,
      "imdbVotes": 370909,
      "imdbId": "tt2395427",
      "type": "movie"
    }
]



window.onload = function() {

    document.getElementById('foo').addEventListener('click', function (e) {
      var img = document.createElement('img');
      img.setAttribute('src', 'http://blog.stackoverflow.com/wp-content/uploads/stackoverflow-logo-300.png');
      e.target.appendChild(img);
    });
  
  };




// function mOver(obj) {
//     obj.innerHTML = "Thank You"
// }

// function mOut(obj) {
//     obj.innerHTML = "Mouse Over Me"
// }


// for (i = 0; i < movies.length; i++){

// }