import {useEffect, useState} from 'react'
import {getListVideo} from '~/services/videosService'
import VideoItem from './VideoItem';

function ListVideo() {
    const [listVideo, setListVideo] = useState([])
    useEffect(()=>{
        getListVideo('for-you',2).then((data)=>{
            setListVideo(data);
        })
    },[])
    console.log(listVideo)
    return ( 
        listVideo.map((video, index) => {
            console.log(video.user.nickname)
            return (
                <VideoItem 
                    key={index} 
                    srcImg={video.user.avatar} 
                    nickname={video.user.nickname} 
                    first_name={video.user.first_name} 
                    last_name={video.user.last_name} 
                    desc={video.description} 
                    tick={video.user.tick}
                    srcVid={video.file_url}
                    music={video.music}
                    like_count={video.likes_count}
                    comment_count={video.comments_count}
                    share_count={video.shares_count}
                    />
            )
        })
    );
}

export default ListVideo;