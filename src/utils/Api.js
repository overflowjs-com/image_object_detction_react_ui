import fetch from  'isomorphic-fetch';


const BASE_API_URL = "http://localhost:4000/api/"

export function api(api_end_point, data) {

    return fetch(BASE_API_URL+api_end_point, 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        }).then((response) => {
            return response.json();
        });
}