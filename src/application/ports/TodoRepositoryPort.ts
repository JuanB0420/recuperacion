import { Todo } from "../../domain/models/Todo";

export interface TodoRepositoryPort {
    findAll(): Promise<Todo[]>;
    findById(id: string): Promise<Todo | null>;
    save(todo: Todo): Promise<void>;
    deleteById(id: string): Promise<void>;
}
