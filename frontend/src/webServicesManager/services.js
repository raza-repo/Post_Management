import axios from 'axios';

let base_url = 'http://localhost:8000/api/'

class Services {
    allPost(endPoint) {
        let api = base_url + endPoint;
        return axios.get(api).then((response) => {
            return response
        })
    }
    // sortByDate(endPoint) {
    //     let api = base_url + endPoint;
    //     return axios.get(api).then((response) => {
    //         return response
    //     })
    // }
}

export default new Services();