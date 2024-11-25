import express from "express";
import { PORT } from "../config/config";
import { InMemoryTodoRepository } from "../repositories/InMemoryTodoRepository";
import { TodoService } from "../../application/services/TodoService";
import { TodoController } from "./controllers/TodoController";
import { TodoRoutes } from "./routes/TodoRoutes";

const app = express();
app.use(express.json());

const todoRepository = new InMemoryTodoRepository();
const todoService = new TodoService(todoRepository);
const todoController = new TodoController(todoService);

app.use("/todos", TodoRoutes(todoController));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
