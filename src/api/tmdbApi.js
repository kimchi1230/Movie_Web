import axiosCLient from "./axiosClient";

export const category = {
    movie: 'movie',
    tv: 'tv'
}
export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated'
}
export const tvType = {
    upcoming: 'upcoming',
    top_rated: 'top_rated',
    popular: 'popular',
    on_the_air: 'on_the_air'
}

const tmdbApi = {
    getMovieList: (type,params) => {
        const url = 'movie/' + movieType[type];
        return axiosCLient.get(url,params);
    },
    getTvList: (type,params) => {
        const url = 'tv/' + movieType[type];
        return axiosCLient.get(url,params);
    },
    getVideos: (cate,id) => {
        const url = category[cate] + '/' + id + '/videos';
        return axiosCLient.get(url,{params: {}});
    },
    seach: (cate,params) => {
        const url = 'seach/' + category[cate];
        return axiosCLient.get(url,params);
    },
    detail: (cate,id, params) => {
        const url = category[cate] + '/' + id;
        return axiosCLient.get(url,params);
    },
    credit: (cate,id) => {
        const url = category[cate] + '/' + id + '/credit';
        return axiosCLient.get(url,{params: {}});
    },
    smilar: (cate,id) => {
        const url = category[cate] + '/' + id + '/similar';
        return axiosCLient.get(url,{params: {}});
    },
}
export default tmdbApi;