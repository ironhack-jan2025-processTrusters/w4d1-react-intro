import moviesArr from "../data/movies.json";


function MovieList(){

    return (
        <div>
            <h2>This is the list of movies:</h2>

            {moviesArr.map((movieObj) => {
                return (
                    <>
                        <p>{movieObj.title}</p>
                        <p>Year: {movieObj.year}</p>
                    </>
                );
            })}

        </div>
    )
}

export default MovieList;