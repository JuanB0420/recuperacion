import { Router } from "express";
import { TodoController } from "../controllers/TodoController";

export const TodoRoutes = (todoController: TodoController): Router => {
    const router = Router();

    router.get("/", todoController.getTodos.bind(todoController));
    router.post("/", todoController.createTodo.bind(todoController));
    router.delete("/:id", todoController.deleteTodoById.bind(todoController));

    return router;
};
