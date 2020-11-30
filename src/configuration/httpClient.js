import axios from 'axios'

export default function getAxiosInstance() {
    const instance = axios.create({
        baseURL: 'http://private-8e8921-woloxfrontendinverview.apiary-mock.com/',
        timeout: 1000,
        headers: { 'X-Custom-Header': 'foobar' }
    });
    instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

    /*TODO ver si configuro algo*/
    instance.interceptors.request.use(function (config) {
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    instance.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        return Promise.reject(error);
    });

    return instance
}
