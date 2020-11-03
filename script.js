let collectionFilms = movies["Movies"];

const addMoviesToDom = function(movie) {
    const cardContainer = document.getElementById("card-selection");
    const array = movie.map(function(movie) {
        // console.log(movie.imdbID);
        const movieWebpage = "https://www.imdb.com/title/" + movie.imdbID;
        return (
            "<li class='list-item' id='movie-list'><a href=" +
            movieWebpage +
            "><img src=" +
            movie.Poster +
            " alt=''></a></li>"
        );
    });

    array.forEach(function(movie) {
        cardContainer.innerHTML += movie;
    });
};

addMoviesToDom(collectionFilms);

const addEventListeners = function() {
    const rbuttons = document.querySelectorAll("input[name='movie']");
    rbuttons.forEach(function(button) {
        button.addEventListener("change", function(e) {
            handleOnChangeEvent(e.target.value);
        });
    });
};

addEventListeners();

///search movies
const searchBar = function() {
    const searchBox = document.querySelectorAll("input");
    searchBox.forEach(function(search) {
        search.addEventListener("keyup", function(e) {
            handleOnChangeEvent(e.target.value.toLowerCase());
        });
    });
};
searchBar();

//filter movies
const handleOnChangeEvent = function(filmName) {
    switch (filmName) {
        case "newmovies":
            filterLatestMovies();
            // console.log("hey ik ben 2014 film");
            break;
        case "avenger":
            filterMovies("Avenger");
            break;
        case "xmen":
            filterMovies("X-Men");
            //  console.log("hey ik ben X-man film");
            break;
        case "princess":
            filterMovies("Princess");
            break;
        case "batman":
            filterMovies("Batman");
            break;
        default:
            console.log("dat is fout!");
    }
};

const filterMovies = (movie1) => {
    const result = collectionFilms.filter(function(movie) {
        return movie.Title.includes(movie1);
    });
    removeLi();
    addMoviesToDom(result);
};

const filterLatestMovies = () => {
    const resultFilteredMovies = collectionFilms.filter(function(movie) {
        return parseInt(movie.Year) >= 2014;
    });
    removeLi();
    addMoviesToDom(resultFilteredMovies);
};

const removeLi = () => {
    const liItems = document.querySelectorAll(".list-item");
    liItems.forEach((item) => item.remove());
};