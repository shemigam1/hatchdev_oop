"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = exports.Task = void 0;
var Task = /** @class */ (function () {
    function Task(title, description) {
        this.title = title;
        this.description = description;
        this.done = false;
        this.id = Math.floor(Math.random() * 1000);
    }
    Task.prototype.getId = function () {
        return this.id;
    };
    Task.prototype.isDone = function () {
        return this.done;
    };
    Task.prototype.toggleDone = function () {
        return this.done = !this.done;
    };
    Task.prototype.updateTitle = function (title) {
        return this.title = title;
    };
    Task.prototype.updateDescription = function (description) {
        return this.description = description;
    };
    return Task;
}());
exports.Task = Task;
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
    }
    TaskManager.prototype.createTask = function (task) {
        console.log(task);
        console.log("task created sucessfully");
        this.tasks.push(task);
    };
    TaskManager.prototype.updateTask = function (newTitle, newDescription, id) {
        var task = this.tasks.find(function (task) { return task.getId() === id; });
        if (!task) {
            console.log("Error: Task with id ".concat(id, " not found"));
            return null;
        }
        if (newTitle === "" && newDescription === "") {
            console.log("Error: title and description cannot be blank");
            return null;
        }
        if (newTitle !== "") {
            task.updateTitle(newTitle);
            console.log("Title updated to: ".concat(task.title));
        }
        if (newDescription !== "") {
            task.updateDescription(newDescription);
            console.log("Description updated to: ".concat(task.description));
        }
        console.log("Task after update:", task);
        console.log("Task updated successfully");
    };
    TaskManager.prototype.viewTasks = function () {
        console.log(this.tasks);
        return this.tasks;
    };
    TaskManager.prototype.getTask = function (id) {
        var task = this.tasks.find(function (task) { return task.getId() === id; });
        console.log(task);
        return task;
    };
    TaskManager.prototype.deleteTask = function (id) {
        this.tasks = this.tasks.filter(function (task) { return task.getId() !== id; });
        console.log("task deleted sucessfully");
    };
    TaskManager.prototype.toggleFinish = function (id) {
        var task = this.tasks.find(function (task) { return task.getId() === id; });
        if (task) {
            task.toggleDone();
            console.log("task marked as ".concat(task.isDone() ? "done" : "not done"));
        }
        else {
            console.log("Error: task with id ".concat(id, " not found"));
        }
    };
    return TaskManager;
}());
exports.TaskManager = TaskManager;
