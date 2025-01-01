import { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom"
import { Button, Icon, Item, Label, Segment } from "semantic-ui-react"
import { useStore } from "../../../app/stores/store";
import { Activity } from "../../../app/models/activity";


interface Props {
    activity: Activity
}

const ActivityListItem = ({ activity }: Props) => {

    const { deleteActivity, loading } = useStore().activityStore;


    const [target, setTarget] = useState('');

    const handleActivityDelete = (e: SyntheticEvent<HTMLButtonElement>, id: string) => {
        setTarget(e.currentTarget.name);
        deleteActivity(id); // Call deleteActivity function from parent component
    }

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src='/assets/user.png' />
                        <Item.Content>
                            <Item.Header as={Link} to={`/activities/${activity.id}`}>{activity.title}</Item.Header>
                            <Item.Description>Hosted by Bob</Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {activity.date}
                    <Icon name='marker' /> {activity.venue}
                </span>
            </Segment>
            <Segment secondary>
                Attendees go here
            </Segment>
            <Segment clearing>
                <span>{activity.description}</span>
                <Button as={Link}
                    to={`/activities/${activity.id}`}
                    color='blue'
                    floated='right'
                    content='View'
                />
            </Segment>
        </Segment.Group>
    )
}

export default ActivityListItem