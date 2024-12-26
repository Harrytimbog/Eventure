import { Grid } from 'semantic-ui-react'
import ActivityList from './ActivityList'
import ActivityDetails from '../details/ActivityDetails'
import { useStore } from '../../../app/stores/store'
import ActivityForm from '../form/ActivityForm'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import LoadingComponent from '../../../app/layout/LoadingComponent'


const ActivityDashboard = () => {

    const { activityStore } = useStore();

    const { selectedActivity, editMode } = activityStore;

    useEffect(() => {
        activityStore.loadActivities()
    }, [activityStore]);


    if (activityStore.loadingInitial) return <LoadingComponent content='Loading app' /> // if loading is true, show loading component

    return (
        <>
            <Grid>
                <Grid.Column width='10'>
                    <ActivityList />
                </Grid.Column>
                <Grid.Column width='6'>
                    {selectedActivity && !editMode &&
                        <ActivityDetails
                        />}
                    {editMode &&
                        <ActivityForm
                        />
                    }
                </Grid.Column>
            </Grid>
        </>
    )
}

export default observer(ActivityDashboard)