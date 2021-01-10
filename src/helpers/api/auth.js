import { url, headers } from '../../constant/base';


export function Auth(type, userData) {

    return new Promise((resolve, reject) => {

        fetch(url + type, {
            method: 'POST',
            headers,
            body: JSON.stringify(userData)
        })
            .then((response) => response.json())
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            });

    });
}

// export function Api(type, userData) {

//     return new Promise((resolve, reject) => {

//         fetch(AuthURL + type, {
//             method: 'POST',
//             headers,
//             body: JSON.stringify(userData)
//         })
//             .then((response) => response.json())
//             .then((res) => {
//                 resolve(res);
//             })
//             .catch((error) => {
//                 reject(error);
//             });

//     });
// }