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
var library_1 = require("./library");
var library = new library_1.Library();
var admin = new library_1.Admin("Semilore", "admin@example.com");
var user = new library_1.User("Jane", "jane@example.com");
function mainMenu() {
    return __awaiter(this, void 0, void 0, function () {
        var response, _a, bookId, answers;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log("\n📚 Welcome to the Library System");
                    _b.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 11];
                    return [4 /*yield*/, (0, enquirer_1.prompt)({
                            type: "select",
                            name: "choice",
                            message: "Choose an option:",
                            choices: [
                                { name: "view", message: "View Books" },
                                { name: "borrow", message: "Borrow a Book" },
                                { name: "add", message: "Add a Book (admin only)" },
                                { name: "exit", message: "Exit" },
                            ],
                        })];
                case 2:
                    response = _b.sent();
                    _a = response.choice;
                    switch (_a) {
                        case "view": return [3 /*break*/, 3];
                        case "borrow": return [3 /*break*/, 4];
                        case "add": return [3 /*break*/, 6];
                        case "exit": return [3 /*break*/, 8];
                    }
                    return [3 /*break*/, 9];
                case 3:
                    user.viewBooks(library);
                    return [3 /*break*/, 10];
                case 4: return [4 /*yield*/, (0, enquirer_1.prompt)({
                        type: "numeral",
                        name: "bookId",
                        message: "Enter Book ID to borrow:",
                        validate: function (value) {
                            return isNaN(value) ? "Please enter a valid number" : true;
                        },
                    })];
                case 5:
                    bookId = (_b.sent()).bookId;
                    user.borrowBook(library, bookId);
                    return [3 /*break*/, 10];
                case 6: return [4 /*yield*/, (0, enquirer_1.prompt)([
                        {
                            type: "input",
                            name: "title",
                            message: "Enter book title:",
                        },
                        {
                            type: "input",
                            name: "author",
                            message: "Enter author:",
                        },
                    ])];
                case 7:
                    answers = _b.sent();
                    admin.addToLibrary(library, {
                        title: answers.title,
                        author: answers.author,
                    });
                    return [3 /*break*/, 10];
                case 8:
                    console.log("Goodbye!");
                    process.exit(0);
                    _b.label = 9;
                case 9:
                    console.log("Invalid option.");
                    _b.label = 10;
                case 10: return [3 /*break*/, 1];
                case 11: return [2 /*return*/];
            }
        });
    });
}
mainMenu();
