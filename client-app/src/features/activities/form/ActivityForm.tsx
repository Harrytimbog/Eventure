import { Button, FormField, Label, Segment } from "semantic-ui-react";
import { ChangeEvent, useEffect, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Activity } from "../../../app/models/activity";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { v4 as uuid } from 'uuid';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextarea from "../../../app/common/form/MyTextarea";
import MySelectInput from "../../../app/common/form/MySelectInput";
import { CategoryOptions } from "../../../app/common/options/CategoryOptions";

const ActivityForm = () => {

    const { createActivity, updateActivity, loading, loadActivity, loadingInitial } = useStore().activityStore;

    const { id } = useParams();
    const navigate = useNavigate();

    const [activity, setActivity] = useState<Activity>({
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    });

    const validationSchema = Yup.object({
        title: Yup.string().required('The activity title is required'),
        description: Yup.string().required('The activity description is required'),
        category: Yup.string().required(),
        date: Yup.string().required(),
        venue: Yup.string().required(),
        city: Yup.string().required()
    })


    useEffect(() => {
        if (id) loadActivity(id).then(activity => setActivity(activity!));
    }, [id, loadActivity]);

    // function handleSubmit() {
    //     if (!activity.id) {
    //         activity.id = uuid();
    //         createActivity(activity).then(() => navigate(`/activities/${activity.id}`));
    //     } else {
    //         updateActivity(activity).then(() => navigate(`/activities/${activity.id}`));
    //     }
    // }

    // function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    //     const { name, value } = event.target;
    //     setActivity({ ...activity, [name]: value });
    // }

    if (loadingInitial) return <LoadingComponent content='Loading activity...' />

    return (
        <Segment clearing>
            <Formik
              validationSchema={validationSchema}
              enableReinitialize initialValues={activity} onSubmit={values => console.log(values)}>
                {({ handleSubmit}) => (
                    <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
                        <MyTextInput name="title" placeholder="Title" />
                        <MyTextarea rows={3} placeholder='Description' name="description"  />
                        <MySelectInput options={CategoryOptions} placeholder='Category' name="category"  />
                        <MyTextInput placeholder='Date' name="date"  />
                        <MyTextInput placeholder='City' name="city"  />
                        <MyTextInput placeholder='Venue' name="venue"  />
                        <Button floated='right' positive type='submit' content='Submit' loading={loading} />
                        <Button floated='right' as={Link} to="/activities" type='button' content='Cancel' />
                    </Form>
                )}
            </Formik>
        </Segment>
    )
}

export default observer(ActivityForm)