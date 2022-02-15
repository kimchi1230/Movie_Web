import react from "react";
import { Link } from "react-router-dom"
import { OutlineButton } from "../components/button/Button";
import HeroSlide from "../components/Hero-slide/HeroSlide";
import MovieList from "../components/movie-list/Movie-list";
import { category, movieType, tvType } from "../api/tmdbApi";

const Home = () => {
  return (
    <>
        <HeroSlide/>
        <div className="container">
            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>TRENDING MOVIE</h2>
                    <Link to="/movie">
                        <OutlineButton className="small">View More</OutlineButton>
                    </Link>
                </div>
                <MovieList category={category.movie} type={movieType.popular}/>
            </div>
            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>TOP RATED MOVIE</h2>
                    <Link to="/movie">
                        <OutlineButton className="small">View More</OutlineButton>
                    </Link>
                </div>
                <MovieList category={category.movie} type={movieType.top_rated}/>
            </div>
            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>TOP RATED TV</h2>
                    <Link to="/tv">
                        <OutlineButton className="small">View More</OutlineButton>
                    </Link>
                </div>
                <MovieList category={category.tv} type={tvType.top_rated}/>
            </div>
            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>UPCOMING TV</h2>
                    <Link to="/tv">
                        <OutlineButton className="small">View More</OutlineButton>
                    </Link>
                </div>
                <MovieList category={category.tv} type={tvType.upcoming}/>
            </div>
        </div>
    </>
  );
}

export default Home;
