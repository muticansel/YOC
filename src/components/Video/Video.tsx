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

    // When we are scrolling on the page, trying to catch video is in the middle of the browser
    useEffect(() => {
        if(!isVideoWatcherRunning) {
            window.addEventListener("load", videoScroll);
            window.addEventListener('scroll', videoScroll);
        }
    }, [isVideoWatcherRunning])

    const videoScroll = async () => {
        if (document.querySelectorAll('video[autoplay]').length > 0) {
            // GET the browser height
            const windowHeight = window.innerHeight;
            const videoEl = document.querySelectorAll('video[autoplay]');

            for (var i = 0; i < videoEl.length; i++) {
                let thisVideoEl: any = videoEl[i]
                // GET the video borders and the top point
                let videoClientRect = thisVideoEl.getBoundingClientRect().top;

                if (videoClientRect <= windowHeight / 2) {
                    if(!isVideoWatcherRunning) {
                        await setIsVideoWatcherRunning(true);
                        thisVideoEl.play();
                        checkVideo();
                    }
                } else {
                    setIsVideoWatcherRunning(false);
                    thisVideoEl.pause();
                    stopVideoInterval();
                }

            }
        }
    }

    const checkVideo = () => {
        videoIntervalId.current = setInterval(() => {
            const video: any = document.querySelectorAll('video[autoplay]')[0];
            const ratio = video.currentTime / video.duration;

            // If video is playing, write console.log
            if(!video.paused) {
                if (ratio > 0.25 && ratio < 0.5) {
                    console.log("PLAYED: %25");
                } else if(ratio > 0.5 && ratio < 0.75) {
                    console.log("PLAYED: %50");
                } else if(ratio > 0.75 && ratio < 0.99) {
                    console.log("PLAYED: %75");
                } if(ratio > 0.99) {
                    console.log("PLAYED: %100");
                }
            }
        }, 1000);
    }

    // Clears the interval
    const stopVideoInterval = () => {
        setIsVideoWatcherRunning(false);
        clearInterval(videoIntervalId);
    }

    return <div className="video-container" ref={videoContainerRef}>
        <video autoPlay muted playsInline controls loop poster="http://placehold.it/350x350" width="100%" height="100%">
            <source src={source} type="video/mp4" />
        </video>
    </div>
}