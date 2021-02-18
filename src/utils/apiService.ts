import axios, {Method} from 'axios'
import {template} from 'lodash';

function api({method, url, data, params, urlParams}: any) {

    function getUrl() {
        return template(url)(urlParams);
    }

    return new Promise((resolve: any, reject: any) => {
        axios({
            method: method as Method,
            url: urlParams ? getUrl() : url,
            data,
            params,
        })
            .then((res) => {
                return resolve(res);
            })
            .catch((err) => {
                alert(err)
                reject(err)
            })
    })
}


export default api
