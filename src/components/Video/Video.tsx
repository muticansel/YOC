import { FunctionComponent, useEffect, useRef, useState } from 'react';
import '../../App.css';

interface VideoProp {
    source: string;
}

export const Video: FunctionComponent<VideoProp> = (props) => {
    const { source } = props;
    const [isVideoWatcherRunning, setIsVideoWatcherRunning] = useState(false);

    const videoContainerRef = useRef(null);
    let videoIntervalId: any = useRef(null);

    useEffect(() => {
        window.addEventListener('load', videoScroll);
        window.addEventListener('scroll', videoScroll);
    }, [isVideoWatcherRunning])

    const videoScroll = () => {
        if (document.querySelectorAll('video[autoplay]').length > 0) {
            const windowHeight = window.innerHeight;
            const videoEl = document.querySelectorAll('video[autoplay]');

            for (var i = 0; i < videoEl.length; i++) {
                let thisVideoEl: any = videoEl[i]
                let videoClientRect = thisVideoEl.getBoundingClientRect().top;

                if (videoClientRect <= windowHeight / 2) {
                    thisVideoEl.play();
                    checkVideo();
                } else {
                    thisVideoEl.pause();
                    stopVideoInterval();
                }

            }
        }
    }

    const checkVideo = () => {
        setIsVideoWatcherRunning(true);
        videoIntervalId.current = setInterval(function () {
            const video: any = document.querySelectorAll('video[autoplay]')[0];
            const ratio = video.currentTime / video.duration;
            if (ratio > 0.25 && ratio < 0.5) {
                console.log("PLAYED: %25");
            } else if(ratio > 0.5 && ratio < 0.75) {
                console.log("PLAYED: %50");
            } else if(ratio > 0.75) {
                console.log("PLAYED: %75");
            }
        }, 1000);
    }

    const stopVideoInterval = () => {
        setIsVideoWatcherRunning(false);
        clearInterval(videoIntervalId.current);
    }

    return <div className="video-container" ref={videoContainerRef}>
        <video autoPlay muted playsInline controls loop poster="http://placehold.it/350x350" width="100%" height="100%">
            <source src={source} type="video/mp4" />
        </video>
    </div>
}