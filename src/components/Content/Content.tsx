import { FunctionComponent } from 'react';
import '../../App.css';

interface ContentProp {
    header: string;
    paragraph: string;
    paragraph2?: string
}

interface Props {
    contents: ContentProp[]
}

export const Content: FunctionComponent<Props> = (props) => {
    return <div className="content">
        {props.contents.map((content: any) => {
            return (
                <div className="block">
                    <h4 className="block-header">
                        {content.header}
                    </h4>
                    <p>
                        {content.paragraph}
                    </p>
                    {content.paragraph2 &&
                        <p>
                            {content.paragraph2}
                        </p>
                    }
                </div>
            )
        })}
    </div>
}