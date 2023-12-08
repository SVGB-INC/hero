import React, { useRef, useEffect } from 'react';

const HeroVideo = ({ onLoaded, onPlay }) => {
    const videoRef = useRef(null);

    useEffect(() => {
      const video = videoRef.current;

      const onCanPlay = () => {
        
        onLoaded();
      };
  
      video.addEventListener('canplay', onCanPlay);
  
      return () => {
        video.removeEventListener('canplay', onCanPlay);
      };
    }, [onLoaded]);
  
    if(onPlay){
      const video = videoRef.current;
      video.play();
    }

    return (
        <video ref={videoRef} loop style={{ position: 'fixed', width: '100%', height: '100%', objectFit: 'fill' }}>
            <source src="/media/video.mp4" type="video/mp4" />
        </video>
    );
}

export default HeroVideo;
