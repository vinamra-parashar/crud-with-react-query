import { url } from '../../constant/base';
import axios from 'axios';

// toastr
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

export const getDepartments = async () => {
    try {
        const { data } = await axios.get(url+'department/list', {
            headers: {
                'filter': '', 'role': 1, 'limit': 10, 'offset': 0, 'Authorization': 'Bearer ' + sessionStorage.getItem('token')
            }
        });
        // console.log('getDepartments', data);
        if (data.status === 200) {
            return data.data.rows;
        } else {
            if (data.status === 401) {
                toastr.error(data.err);
                sessionStorage.clear();
                window.location = '/login'
            }
            return [];
        }
    } catch (error) {
        return error;
    }
};

export const addDepartments = async (values) => {
    try {
        const { data } = await axios.post(url + 'department/add', values, {
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('token')
            }
        });
        console.log('addDepartments', data);
        return data;
    } catch (error) {
        return error;
    }
};

export const updateDepartments = async (id, values) => {
    try {
        const { data } = await axios.post(url + 'department/update', {"dId":`${id}`,"name":values.name}, {
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('token')
            }
        });
        // console.log('updateDepartments', data);
        return data;
    } catch (error) {
        return error;
    }
};