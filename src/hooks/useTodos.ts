import {useQuery} from "@tanstack/react-query";
import TodoService from "../services/todo.service.ts";

export const useTodos = () => {

    return useQuery({
        queryKey: ['todos'],
        queryFn: () => TodoService.getAll(),
        select: ({data}) => data
    })
}