import { FunctionComponent } from 'react';
import '../../App.css';

interface VideoProp {
    source: string;
}

export const Video: FunctionComponent<VideoProp> = (props) => {
    const { source } = props;
    return <div className="video-container">
        <video controls width="100%" height="100%">
            <source src={source} type="video/mp4" />
        </video>
    </div>
}