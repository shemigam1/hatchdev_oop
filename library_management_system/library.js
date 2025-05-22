"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = exports.User = exports.Library = void 0;
var Book = /** @class */ (function () {
    function Book(title, author) {
        this.title = title;
        this.author = author;
        this.available = true;
        this.id = Math.floor(Math.random() * 1000);
    }
    Book.prototype.getId = function () {
        return this.id;
    };
    Book.prototype.isAvailable = function () {
        console.log("".concat(this.title, " is ").concat(this.available ? 'available' : 'not available'));
        return this.available;
    };
    Book.prototype.borrow = function () {
        if (this.available) {
            this.available = false;
            console.log("".concat(this.title, " borrowed sucessfully"));
            return true;
        }
        console.log("".concat(this.title, " not available! try again later."));
        return false;
    };
    Book.prototype.returnBook = function () {
        if (!this.available) {
            this.available = true;
            console.log("".concat(this.title, " returned sucessfully"));
        }
        else {
            console.log("Error: ".concat(this.title, " already returned"));
        }
    };
    return Book;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.listBooks = function () {
        return this.books;
    };
    Library.prototype.borrowBook = function (bookId) {
        var book = this.books.find(function (book) { return book.getId() === bookId; });
        if (book && book.isAvailable()) {
            book.borrow();
            return book;
        }
        else {
            return null;
        }
    };
    return Library;
}());
exports.Library = Library;
var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
    }
    User.prototype.viewBooks = function (library) {
        var books = library.listBooks();
        books.forEach(function (book) {
            console.log("".concat(book.getId(), ": ").concat(book.title, " by ").concat(book.author));
        });
    };
    User.prototype.viewBookByTitle = function (library, title) {
        var book = library.listBooks().find(function (book) { return book.title === title; });
        if (book) {
            console.log("".concat(book.title, " by ").concat(book.author));
        }
        else {
            console.log("Error: Book not found");
        }
    };
    User.prototype.borrowBook = function (library, bookId) {
        var book = library.borrowBook(bookId);
        if (book) {
            console.log("".concat(book.title, " borrowed successfully"));
        }
        else {
            console.log("Error: Book not available");
        }
    };
    return User;
}());
exports.User = User;
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(name, email) {
        var _this = _super.call(this, name, email) || this;
        _this.admin = true;
        return _this;
    }
    Admin.prototype.createBook = function (bookData) {
        return new Book(bookData.title, bookData.author);
    };
    Admin.prototype.addToLibrary = function (library, bookData) {
        var book = this.createBook(bookData);
        library.addBook(book);
    };
    return Admin;
}(User));
exports.Admin = Admin;
