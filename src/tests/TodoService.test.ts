import { TodoService } from "../application/services/TodoService";
import { InMemoryTodoRepository } from "../infrastructure/repositories/InMemoryTodoRepository";

describe("TodoService", () => {
    let todoService: TodoService;

    beforeEach(() => {
        const todoRepository = new InMemoryTodoRepository();
        todoService = new TodoService(todoRepository);
    });

    it("should create and retrieve todos", async () => {
        const todo = { id: "1", title: "Test Todo", completed: false };
        await todoService.createTodo(todo);

        const todos = await todoService.getAllTodos();
        expect(todos).toEqual([todo]);
    });

    it("should throw an error when a todo is not found", async () => {
        await expect(todoService.getTodoById("999")).rejects.toThrowError("Todo with ID 999 not found");
    });
});
