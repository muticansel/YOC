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
        const videoScroll = () => {
            if (document.querySelectorAll('video[autoplay]').length > 0) {
                // GET the browser height
                const windowHeight = window.innerHeight;
                const videoEl = document.querySelectorAll('video[autoplay]');

                for (var i = 0; i < videoEl.length; i++) {
                    let thisVideoEl: any = videoEl[i]
                    // GET the video borders and the top point
                    let videoClientRect = thisVideoEl.getBoundingClientRect().top;

                    if (videoClientRect > 0 && videoClientRect <= windowHeight / 2) {
                        if (!isVideoWatcherRunning) {
                            setIsVideoWatcherRunning(true);
                            thisVideoEl.play();
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
            const video: any = document.querySelectorAll('video[autoplay]')[0];

            if (isVideoWatcherRunning && !video.paused) {
                videoIntervalId.current = setInterval(() => {
                    // If video is playing, write console.log
                    if (!video.paused) {
                        let ratio = video.currentTime / video.duration;
                        if (ratio > 0.25 && ratio < 0.5) {
                            console.log("PLAYED: %25");
                        } else if (ratio > 0.5 && ratio < 0.75) {
                            console.log("PLAYED: %50");
                        } else if (ratio > 0.75 && ratio < 0.99) {
                            console.log("PLAYED: %75");
                        } if (ratio > 0.99) {
                            console.log("PLAYED: %100");
                        }
                    }
                }, 1000);
            }
        }

        // Check the video watcher
        // If it is running, check the video playing ratio
        if (!isVideoWatcherRunning) {
            window.addEventListener("load", videoScroll);
            window.addEventListener('scroll', videoScroll);
        } else {
            checkVideo()
        }
    }, [isVideoWatcherRunning])

    // Clears the interval
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