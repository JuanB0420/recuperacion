import { TodoRepositoryPort } from "../../application/ports/TodoRepositoryPort";
import { Todo } from "../../domain/models/Todo";

export class InMemoryTodoRepository implements TodoRepositoryPort {
    private todos: Todo[] = [];

    async findAll(): Promise<Todo[]> {
        return this.todos;
    }

    async findById(id: string): Promise<Todo | null> {
        return this.todos.find(todo => todo.id === id) || null;
    }

    async save(todo: Todo): Promise<void> {
        this.todos.push(todo);
    }

    async deleteById(id: string): Promise<void> {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }
}
