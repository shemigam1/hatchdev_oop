"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var enquirer_1 = require("enquirer");
var task_1 = require("./task");
// Your Task and TaskManager classes assumed imported or defined above here
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var manager, action, _a, _b, title, description, id, _c, newTitle, newDescription, id, id;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    manager = new task_1.TaskManager();
                    _d.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 14];
                    return [4 /*yield*/, (0, enquirer_1.prompt)({
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
                        })];
                case 2:
                    action = (_d.sent()).action;
                    if (action === "exit") {
                        console.log("Goodbye!");
                        return [2 /*return*/];
                    }
                    _a = action;
                    switch (_a) {
                        case "view": return [3 /*break*/, 3];
                        case "create": return [3 /*break*/, 4];
                        case "update": return [3 /*break*/, 6];
                        case "delete": return [3 /*break*/, 9];
                        case "toggle": return [3 /*break*/, 11];
                    }
                    return [3 /*break*/, 13];
                case 3:
                    manager.viewTasks();
                    return [3 /*break*/, 13];
                case 4: return [4 /*yield*/, (0, enquirer_1.prompt)([
                        {
                            type: "input",
                            name: "title",
                            message: "Enter task title:",
                            validate: function (value) { return (value.trim() === "" ? "Title cannot be empty" : true); },
                        },
                        {
                            type: "input",
                            name: "description",
                            message: "Enter task description:",
                            validate: function (value) { return (value.trim() === "" ? "Description cannot be empty" : true); },
                        },
                    ])];
                case 5:
                    _b = _d.sent(), title = _b.title, description = _b.description;
                    manager.createTask(new task_1.Task(title, description));
                    return [3 /*break*/, 13];
                case 6:
                    if (manager.viewTasks().length === 0) {
                        console.log("No tasks to update.\n");
                        return [3 /*break*/, 13];
                    }
                    return [4 /*yield*/, (0, enquirer_1.prompt)({
                            type: "select",
                            name: "id",
                            message: "Select task to update:",
                            choices: manager.viewTasks().map(function (task) { return ({
                                name: String(task.getId()),
                                message: "".concat(task.getId(), " - ").concat(task.title),
                                value: task.getId(),
                            }); }),
                        })];
                case 7:
                    id = (_d.sent()).id;
                    return [4 /*yield*/, (0, enquirer_1.prompt)([
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
                        ])];
                case 8:
                    _c = _d.sent(), newTitle = _c.newTitle, newDescription = _c.newDescription;
                    if (newTitle === "" && newDescription === "") {
                        console.log("Nothing to update.\n");
                        return [3 /*break*/, 13];
                    }
                    manager.updateTask(newTitle, newDescription, id);
                    return [3 /*break*/, 13];
                case 9:
                    if (manager.viewTasks().length === 0) {
                        console.log("No tasks to delete.\n");
                        return [3 /*break*/, 13];
                    }
                    return [4 /*yield*/, (0, enquirer_1.prompt)({
                            type: "select",
                            name: "id",
                            message: "Select task to delete:",
                            choices: manager.viewTasks().map(function (task) { return ({
                                name: String(task.getId()),
                                message: "".concat(task.getId(), " - ").concat(task.title),
                                value: task.getId(),
                            }); }),
                        })];
                case 10:
                    id = (_d.sent()).id;
                    manager.deleteTask(id);
                    return [3 /*break*/, 13];
                case 11:
                    if (manager.viewTasks().length === 0) {
                        console.log("No tasks to toggle.\n");
                        return [3 /*break*/, 13];
                    }
                    return [4 /*yield*/, (0, enquirer_1.prompt)({
                            type: "select",
                            name: "id",
                            message: "Select task to toggle done:",
                            choices: manager.viewTasks().map(function (task) { return ({
                                name: String(task.getId()),
                                message: "".concat(task.getId(), " - ").concat(task.title, " [").concat(task.isDone() ? "Done" : "Not Done", "]"),
                                value: task.getId(),
                            }); }),
                        })];
                case 12:
                    id = (_d.sent()).id;
                    manager.toggleFinish(id);
                    return [3 /*break*/, 13];
                case 13: return [3 /*break*/, 1];
                case 14: return [2 /*return*/];
            }
        });
    });
}
main();
