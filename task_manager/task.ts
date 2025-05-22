class Task {
    public title: string
    public description: string
    private done: boolean
    private id: number
    constructor(title: string, description: string) {
        this.title = title
        this.description = description
        this.done = false
        this.id = Math.floor(Math.random() * 1000)
    }

    getId() {
        return this.id
    }

    isDone() {
        return this.done;
    }

    toggleDone() {
        return this.done = !this.done;
    }

    updateTitle(title: string) {
        return this.title = title
    }

    updateDescription(description: string) {
        return this.description = description
    }
}

class TaskManager {
    private tasks: Task[]
    constructor() {
        this.tasks = []
    }

    createTask(task: Task) {
        console.log(task);
        console.log(`task created sucessfully`);

        this.tasks.push(task)
    }

    updateTask(newTitle: string, newDescription: string, id: number) {
        const task = this.tasks.find(task => task.getId() === id);
        if (!task) {
            console.log(`Error: Task with id ${id} not found`);
            return null;
        }

        if (newTitle === "" && newDescription === "") {
            console.log(`Error: title and description cannot be blank`);
            return null;
        }

        if (newTitle !== "") {
            task.updateTitle(newTitle);
            console.log(`Title updated to: ${task.title}`);
        }

        if (newDescription !== "") {
            task.updateDescription(newDescription);
            console.log(`Description updated to: ${task.description}`);
        }

        console.log(`Task after update:`, task);

        console.log(`Task updated successfully`);
    }
    viewTasks() {
        console.log(this.tasks);

        return this.tasks
    }

    getTask(id: number) {
        const task = this.tasks.find(task => task.getId() === id)
        console.log(task);

        return task
    }

    deleteTask(id: number) {
        this.tasks = this.tasks.filter(task => task.getId() !== id)
        console.log(`task deleted sucessfully`);
    }

    toggleFinish(id: number) {
        const task = this.tasks.find((task) => task.getId() === id);
        if (task) {
            task.toggleDone();
            console.log(`task marked as ${task.isDone() ? "done" : "not done"}`);
        } else {
            console.log(`Error: task with id ${id} not found`);
        }
    }
}

export { Task, TaskManager }
