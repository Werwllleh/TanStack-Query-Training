import axios from "axios";
import {ITodoResponse} from "../app.interface.ts";

class TodoService {
    private URL  = 'https://jsonplaceholder.typicode.com/todos'

    async getAll() {
        return axios.get<ITodoResponse[]>(this.URL)
    }

    async getById(id: string | number) {
        return axios.get<ITodoResponse>(`${this.URL}/${id}`)
    }
}

export default new TodoService();