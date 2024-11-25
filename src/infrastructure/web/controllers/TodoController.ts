import { Request, Response } from "express";
import { TodoService } from "../../../application/services/TodoService";

export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    async getTodos(req: Request, res: Response): Promise<void> {
        const todos = await this.todoService.getAllTodos();
        res.json(todos);
    }

    async createTodo(req: Request, res: Response): Promise<void> {
        await this.todoService.createTodo(req.body);
        res.status(201).send();
    }

    async deleteTodoById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await this.todoService.deleteTodoById(id);
        res.status(204).send();
    }
}
