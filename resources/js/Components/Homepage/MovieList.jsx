const isMovie = (MovieList) => {
    return MovieList.map((data, i) => {
        return (
            <div key={i} className="card w-full lg:w-96 bg-base-100">
                <figure>
                    <img
                        src={`${"https://image.tmdb.org/t/p/w500"}/${
                            data.poster_path
                        }`}
                        alt="movies-img"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{data.title}</h2>
                    <p>{data.release_date}</p>
                    <p>{data.vote_average}</p>
                </div>
            </div>
        );
    });
};

const noMovieList = () => {
    return <div>Saat ini tidak ada film yang populer</div>;
};

const MovieList = ({ MovieList }) => {
    return !MovieList ? noMovieList() : isMovie(MovieList);
};

export default MovieList;
