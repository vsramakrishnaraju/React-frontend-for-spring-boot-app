import axios from 'axios';
const USERS_REST_API_URL = 'http://localhost:8080/api/users';

class UserService { 
    gertUsers() {
        
        return axios.get(USERS_REST_API_URL);
        debugger
    }
}

export default new UserService();