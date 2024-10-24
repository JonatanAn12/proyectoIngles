import axios from "axios";

export default class personaServices{

    url = 'http://localhost8080/api/personaServices'
    
    getALl(){
        return axios.get(this.url + 'all');
    }
}