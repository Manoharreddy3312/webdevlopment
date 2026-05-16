import { useRef, useState } from 'react'

// import videos from '../assets/videotest.mp4'
import video from '../assets/videotest.mp4'

/*
const FormFocus = () => {
  const formFocus = useRef()
  

useEffect(() => {
  formFocus.current.focus()
  
},[]);

    return (
        <div style={{marginLeft:'40%',marginTop:'10%',}}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" ref={formFocus} />
        </div>
    )
}

export default FormFocus




*/
// import video add two buttons to play and pause the video when clicked on the play button the video should play and when clicked on the pause button the video should pause

const FormFocus = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false); 

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying); 
        }
    };

    return (
        <div style={{ marginLeft: '25%', marginTop: '5%' }}>
           <video src={video} ref={videoRef} width="700" height="500" /> 
            <br />
            <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button> &nbsp;&nbsp;
            <button onClick={() =>videoRef.current.requestFullscreen()}>Full Screen</button>
        </div>
    );
};
export default FormFocus
