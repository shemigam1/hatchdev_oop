import { newBook } from "./utils";

class Book {
    public title: string;
    public author: string;
    private id: number;
    private available: boolean;
    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
        this.available = true;
        this.id = Math.floor(Math.random() * 1000);
    }

}

class Library {
    private books: Book[];
    constructor() {
        this.books = [];
    }
}




class User {
    // user should be able to access books
    // borrow book
    // list all books
    public name: string;
    public email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

}
class Admin extends User {
    public admin: boolean;
    constructor(name: string, email: string, role: boolean) {
        super(name, email);
        this.admin = true;
    }

}