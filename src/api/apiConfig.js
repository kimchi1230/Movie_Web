const apiConfig={
    baseUrl:'https://api.themoviedb.org/3/',
    apiKey: '7ceae466ef50a8324f990347eb43ab6a',
    oringinalImage:  (imgPath) =>`https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath ) =>`https://image.tmdb.org/t/p/w500/${imgPath}`,
}
export default apiConfig;
