import { FunctionComponent } from 'react';
import '../../App.css';

interface HeaderProp {
    header: string;
    paragraph?: string;
    isSpecialHeader?: boolean;
}

export const Header: FunctionComponent<HeaderProp> = (props) => {
    const { header, paragraph, isSpecialHeader } = props;
    return (
        <div className="header">
            <h2>{header} {isSpecialHeader && <sup>&reg;</sup>}</h2>
            {paragraph && <p>{paragraph}</p>}
        </div>
    )
}