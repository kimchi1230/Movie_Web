import React, {useCallback, useEffect, useState}  from 'react';
import PropTypes from 'prop-types';
import './movie-grid.scss';
import MovieCard from '../movie-card/MovieCard';
import { useParams, useNavigate } from 'react-router-dom';
import tmdbApi, { category, movieType, tvType } from '../../api/tmdbApi';
import Button, { OutlineButton } from '../button/Button';
import Input from '../input/input';

const MovieGrid = props => {
  const [items, setItem] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const {keyword} = useParams();
  useEffect(() => {
        const getList = async () =>{
            let response = null;

            if(keyword === undefined){
                const params = {};
                switch(props.category){
                    case category.movie:
                        response = await tmdbApi.getMovieList(movieType.upcoming, {params});
                        break;
                    default:
                        response = await tmdbApi.getTvList(tvType.popular, {params});
                }
            }else{
                const params={
                    query :keyword
                }
                response = await tmdbApi.search(props.category,{params});
            }
            setItem(response.results);
            setTotalPage(response.total_pages);
      }
      getList();
  }, [props.category, keyword]);
  const loadmore = async ()=>{
      let response = null;
      if(keyword === undefined){
            const params = {
                page: page + 1
            };
            switch(props.category){
                case category.movie:
                    response = await tmdbApi.getMovieList(movieType.upcoming, {params});
                    break;
                default:
                    response = await tmdbApi.getTvList(tvType.popular, {params});
            }
        }else{
            const params={
                page: page+1,
                query :keyword
            }
            response = await tmdbApi.search(props.category,{params})
        }
        setItem([...items, ...response.results]);
        setPage(page + 1);
  }

  
  return (
    <>
        <div className="section mb-3">
            <Movieseach category={[props.category]} keyword={keyword}/>
        </div>
        <div className="movie-grid">
            {
                items.map((item,i)=> <MovieCard category={props.category} item={item} key={i}/>)
            }
        </div>
        {
            page < totalPage ? (
                <div className="movie-grid__loadmore">
                    <OutlineButton className="small" onClick={loadmore}>
                        LOAD MORE
                    </OutlineButton>
                </div>
            ) : null
        }
     </>
  );
}
const  Movieseach = props =>{
    let navigate = useNavigate();
    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');
    const goTosearch = useCallback(
        ()=>{
            if(keyword.trim().length > 0){
                navigate(`/${category[props.category]}/search/${keyword}`);
            }
        },
        [keyword, props.category, navigate]
    );
    useEffect(() => {
      const enterEvent = (e) =>{
          e.preventDefault();
          if(e.keycode === 13){
            goTosearch();
          }
      }
      document.addEventListener('keyup', enterEvent);
      return () => {
        document.removeEventListener('keyup', enterEvent);
      };
    }, [keyword,goTosearch])
    
    return (
        <div className='movie-seach'>
            <Input
                type = "text"
                placeholder = "Enter Keyword"
                value = {keyword}
                onChange = {(e) => setKeyword(e.target.value)}
            />
            <Button className="small" onClick={goTosearch}>search</Button>
        </div>
    );
}
MovieGrid.propTypes = {}

export default MovieGrid