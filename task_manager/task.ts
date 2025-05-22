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
        this.done = !this.done;
    }

    updateTitle(title: string) {
        this.title = title
    }

    updateDescription(description: string) {
        this.description = description
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
        const task = this.tasks.find(task => task.getId() === id)
        if (task) {
            if (newTitle === "" && newDescription === "") {
                console.log(`Error: title and description cannot be blank`);
                return null
            }
            if (newTitle !== "") {
                task.updateTitle(newTitle)
            }
            if (newDescription !== "") {
                task.updateDescription(newDescription)
            }
        }

        const updatedTask = this.tasks.find(task => task.getId() === id)
        console.log(updatedTask);

        console.log(`task updated sucessfully`);
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