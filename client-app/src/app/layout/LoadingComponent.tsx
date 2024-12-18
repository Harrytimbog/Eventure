import { Dimmer, Loader } from "semantic-ui-react";

interface IProps {
    inverted?: boolean;
    content?: string;
}

const LoadingComponent = ({ inverted = true, content = 'loading...' }: IProps) => {
    return (
        <>
            <Dimmer active inverted={inverted}>
                <Loader content={content} />
            </Dimmer>
        </>
    )
}

export default LoadingComponent