import React, {useState, useEffect, useRef} from 'react';
import { useParams  } from "react-router-dom";
import tmdbApi from '../../api/tmdbApi';



const VideoList = props => {
    const { category} = useParams();
    const [videos , setVideos] = useState([]);
    useEffect(() => {
        const getVideos = async() => {
            const res = await tmdbApi.getVideos(category, props.id);
            setVideos(res.results.slice(0,5));

        }
        getVideos()
    }, [category, props.id])
    return (
        <>
            {
                videos.map((item,i)=>(
                    <Video key={i} item={item}/> 
                ))
            }
        </>
    );
}
const Video = props =>{
    const item = props.item;
    const iframeref = useRef(null);

    useEffect(() => {
        const height = iframeref.current.offsetWidth * 9 / 16 + 'px';
        iframeref.current.setAttribute('height', height);
    }, [])
    

    return (
        <div className="video">
            <div className="video__title">
                <h2>{item.name}</h2>
            </div>
            <iframe src={`https://www.youtube.com/embed/${item.key}`} frameBorder="0" ref={iframeref} width="100%" title="Video"></iframe>
        </div>
    )
}
export default VideoList;
