import { prompt } from 'enquirer';
import { Task, TaskManager } from './task';

// Your Task and TaskManager classes assumed imported or defined above here

async function main() {
    const manager = new TaskManager();

    while (true) {
        const { action } = await prompt<{ action: string }>({
            type: "select",
            name: "action",
            message: "Select an action",
            choices: [
                { name: "view", message: "View Tasks" },
                { name: "create", message: "Create Task" },
                { name: "update", message: "Update Task" },
                { name: "delete", message: "Delete Task" },
                { name: "toggle", message: "Toggle Task Done" },
                { name: "exit", message: "Exit" },
            ],
        });

        if (action === "exit") {
            console.log("Goodbye!");
            return;
        }

        switch (action) {
            case "view":
                manager.viewTasks();
                break;

            case "create": {
                const { title, description }: any = await prompt([
                    {
                        type: "input",
                        name: "title",
                        message: "Enter task title:",
                        validate: (value) => (value.trim() === "" ? "Title cannot be empty" : true),
                    },
                    {
                        type: "input",
                        name: "description",
                        message: "Enter task description:",
                        validate: (value) => (value.trim() === "" ? "Description cannot be empty" : true),
                    },
                ]);
                manager.createTask(new Task(title, description));
                break;
            }

            case "update": {
                if (manager.viewTasks().length === 0) {
                    console.log("No tasks to update.\n");
                    break;
                }
                const { id } = await prompt<{ id: number }>({
                    type: "select",
                    name: "id",
                    message: "Select task to update:",
                    choices: manager.viewTasks().map(task => ({
                        name: String(task.getId()),
                        message: `${task.getId()} - ${task.title}`,
                        value: task.getId(),
                    })),
                });

                const { newTitle, newDescription }: any = await prompt([
                    {
                        type: "input",
                        name: "newTitle",
                        message: "Enter new title (leave blank to keep current):",
                    },
                    {
                        type: "input",
                        name: "newDescription",
                        message: "Enter new description (leave blank to keep current):",
                    },
                ]);
                if (newTitle === "" && newDescription === "") {
                    console.log("Nothing to update.\n");
                    break;
                }
                manager.updateTask(newTitle, newDescription, id);
                break;
            }

            case "delete": {
                if (manager.viewTasks().length === 0) {
                    console.log("No tasks to delete.\n");
                    break;
                }
                const { id } = await prompt<{ id: number }>({
                    type: "select",
                    name: "id",
                    message: "Select task to delete:",
                    choices: manager.viewTasks().map(task => ({
                        name: String(task.getId()),
                        message: `${task.getId()} - ${task.title}`,
                        value: task.getId(),
                    })),
                });
                manager.deleteTask(id);
                break;
            }

            case "toggle": {
                if (manager.viewTasks().length === 0) {
                    console.log("No tasks to toggle.\n");
                    break;
                }
                const { id } = await prompt<{ id: number }>({
                    type: "select",
                    name: "id",
                    message: "Select task to toggle done:",
                    choices: manager.viewTasks().map(task => ({
                        name: String(task.getId()),
                        message: `${task.getId()} - ${task.title} [${task.isDone() ? "Done" : "Not Done"}]`,
                        value: task.getId(),
                    })),
                });
                manager.toggleFinish(id);
                break;
            }
        }
    }
}

main();
