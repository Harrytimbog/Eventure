import { Message } from "semantic-ui-react";

interface IProps {
    errors: string[];
}


const ValidationError = ({errors}: IProps) => {
  return (
    <Message error>
        {errors && (
            <Message.List>
                {errors.map((err: string, i) => (
                    <Message.Item key={i}>
                        {err}
                    </Message.Item>
                ))}
            </Message.List>
        )}
    </Message>
  )
}

export default ValidationError