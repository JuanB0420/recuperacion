import { TodoRepositoryPort } from "../ports/TodoRepositoryPort";
import { Todo } from "../../domain/models/Todo";
import { TodoNotFoundException } from "../../domain/exceptions/TodoNotFoundException";

export class TodoService {
    constructor(private readonly todoRepository: TodoRepositoryPort) {}

    async getAllTodos(): Promise<Todo[]> {
        return this.todoRepository.findAll();
    }

    async getTodoById(id: string): Promise<Todo> {
        const todo = await this.todoRepository.findById(id);
        if (!todo) {
            throw new TodoNotFoundException(id);
        }
        return todo;
    }

    async createTodo(todo: Todo): Promise<void> {
        await this.todoRepository.save(todo);
    }

    async deleteTodoById(id: string): Promise<void> {
        const todo = await this.todoRepository.findById(id);
        if (!todo) {
            throw new TodoNotFoundException(id);
        }
        await this.todoRepository.deleteById(id);
    }
}
