import axios from "axios";

export default{
    getQuestion(id){
        return axios.get(`http://127.0.0.1:8000/api/question/question/${id}/`)
    }
}