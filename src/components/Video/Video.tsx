import { FunctionComponent, useEffect, useRef } from 'react';
import '../../App.css';

interface VideoProp {
    source: string;
}

export const Video: FunctionComponent<VideoProp> = (props) => {
    const { source } = props;

    const videoContainerRef = useRef(null);

    useEffect(() => {
        window.addEventListener('load', videoScroll);
        window.addEventListener('scroll', videoScroll);
    }, [])

    const videoScroll = () => {
        if (document.querySelectorAll('video[autoplay]').length > 0) {
            const windowHeight = window.innerHeight;
            const videoEl = document.querySelectorAll('video[autoplay]');

            for (var i = 0; i < videoEl.length; i++) {
                let thisVideoEl: any = videoEl[i]
                // let videoHeight = thisVideoEl.clientHeight;
                let videoClientRect = thisVideoEl.getBoundingClientRect().top;

                if(videoClientRect <= windowHeight / 2) {
                    thisVideoEl.play();
                } else {
                    thisVideoEl.pause();
                }

            }
        }
    }

    return <div className="video-container" ref={videoContainerRef}>
        <video autoPlay muted playsInline controls loop poster="http://placehold.it/350x350" width="100%" height="100%">
            <source src={source} type="video/mp4" />
        </video>
    </div>
}