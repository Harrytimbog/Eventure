import axios, { AxiosResponse } from "axios";
import { Activity } from "../app/models/activity";

axios.defaults.baseURL = "http://localhost:5000/api";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: object) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: object) => axios.put<T>(url, body).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Activities = {
    list: () => requests.get<Activity[]>("/activities"),
    details: (id: string) => requests.get(`/activities/${id}`),
    create: (activity: object) => requests.post("/activities", activity),
    update: (activity: object) => requests.put("/activities", activity),
    delete: (id: string) => requests.del(`/activities/${id}`),
}

const agent = {
    Activities
}

export default agent;