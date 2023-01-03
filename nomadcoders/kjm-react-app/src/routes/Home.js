import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  // fetch().then() 말고 async-await 사용 가능
  const getMovies = async () => {
    const res = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
    );
    const json = await res.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((mov) => (
            <Movie
              key={mov.id}
              id={mov.id}
              coverImage={mov.medium_cover_image}
              title={mov.title}
              summary={mov.summary}
              genres={mov.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
