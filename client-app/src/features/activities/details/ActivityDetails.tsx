import { Button, Card, Image } from "semantic-ui-react"
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";


const ActivityDetails = () => {

    const { activityStore } = useStore();
    const { selectedActivity: activity } = activityStore;

    if (!activity) return <LoadingComponent />;
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