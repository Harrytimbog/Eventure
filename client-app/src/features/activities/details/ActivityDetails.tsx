import { Button, Card, Image } from "semantic-ui-react"
import { Activity } from "../../../app/models/activity"

interface IProps {
    activity: Activity
}

const ActivityDetails = ({ activity }: IProps) => {
    return (
        <>
            <Card fluid>
                <Image src={`/assets/categoryImages/${activity.category.toLowerCase()}.jpg`} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{activity.title}</Card.Header>
                    <Card.Meta>
                        <span >{activity.date}</span>
                    </Card.Meta>
                    <Card.Description>
                        {activity.description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button.Group widths='2'>
                        <Button basic color='blue' content='Edit' />
                        <Button basic color='grey' content='Cancel' />
                    </Button.Group>
                </Card.Content>
            </Card>
        </>
    )
}

export default ActivityDetails