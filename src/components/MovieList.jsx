import moviesArr from "../data/movies.json";


function MovieList(){

    let title;
    if(moviesArr.length){
        title = "This is the list of movies:";
    } else {
        title = "Sorry, no movies to display";
    }

    return (
        <div>
            <h2>{title}</h2>

            {moviesArr.map((movieObj) => {
                return (
                    <div key={movieObj.id}>
                        <p>{movieObj.title}</p>

                        { movieObj.imgURL 
                            ? <img src={movieObj.imgURL} alt={movieObj.title} />
                            : <img src="https://dummyimage.com/182x268/ffffff/000000" />
                        }

                        <p>Year: {movieObj.year}</p>
                        <p>Rating: {movieObj.rating}</p>

                        {movieObj.rating >= 7 && <p>RECOMMENDED</p>}
                    </div>
                );
            })}

        </div>
    )
}

export default MovieList;