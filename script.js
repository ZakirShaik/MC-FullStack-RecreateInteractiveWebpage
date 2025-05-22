let addtoMovieList = () => {
    const movie = document.getElementById("movieInput").value;
    document.getElementById("movieInput").value = '';
    let movieItem = document.createElement("li");
    movieItem.textContent = movie;
    document.getElementById("movieList").appendChild(movieItem);
};